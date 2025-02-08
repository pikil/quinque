{#if webrtcSupported === null}
  <PageLoader />
{:else if !webrtcSupported}
  <!-- eslint-disable-next-line max-len -->
  <p class="text-faded">Your browser does not support webRTC peer-to-peer connections.. If you see this message, please try to change to a browser which supports webRTC (hint: most of modern web browsers do).</p>
{:else if connectionError}
  <p class="text-faded">{connectionError}</p>
{:else if roomLink}
  <p class="pb-4 text-faded">Room id:&ensp;<span class="text-white">{room?.id}</span></p>
  <input value={roomLink} class={inputClasses} readonly />
  {#if copyAvailable}
    <div class="flex flex-row items-center gap-4 pt-6">
      <Button
        label="Copy link"
        icon={fasCopy}
        class="text-primary border-2 border-primary px-4"
        onclick={copyRoomLink}
      />
      {#if valuesCopied}
        <p class={valuesCopied.class}>{valuesCopied.label}</p>
      {/if}
    </div>
  {/if}
{:else}
  <PageLoader />
{/if}
<script>
import PageLoader from '$blocks/loaders/PageLoader.svelte'
import { onDestroy, onMount } from 'svelte'
import FirestoreRoom from '$utils/firebase/documents/FirestoreRoom'
import { page } from '$app/state'
import Button from '$ui/buttons/Button.svelte'
import { navigatorCopyAvailable, copyToClipboard } from '$utils/navigator'
import { fasCopy } from '$vendor/icons/fontawesome6-icons'
import { defaultGridSize } from '$data/numbers'
import { allowedGridSizes } from '$data/arrays'
import peerConnection from '$utils/rtc/connection'
import { peerStatuses, rtcTypes } from '$data/objects'
import PeerCrypto from '$utils/peer-crypto'
import { consoleInfo, consoleWarn } from '$utils/console'
import { popupConfirm } from '$utils/validation'

/**
 * @typedef {Object} Props
 * @property {Function} onconnected
 */

/** @type {Props} */
let {
  onconnected
} = $props()

const inputClasses = 'p-2 border border-gray-700 rounded-md w-full bg-gray-800'
const copyAvailable = navigatorCopyAvailable()

/**
 * @type {Object.<String, true>}
 */
const candidatesCache = {}

/**
 * @type {Boolean?}
 */
let webrtcSupported = $state(null)

/**
 * @type {String}
 */
let roomLink = $state('')

/**
 * @type {Object.<String, String|Boolean>?}
 */
let valuesCopied = $state(null)

/**
 * @type {String}
 */
let connectionError = $state('')

/**
 * @type {FirestoreRoom?}
 */
let room = $state(null)

/**
 * @type {import('firebase/firestore').Unsubscribe?}
 */
let unsubscribeRoomData = null

/**
 * @type {Object.<'type'|'offer'|'answer'|'offerIceCandidates'|'answerIceCandidates', String|Number>}
 */
const roomCache = {}

/**
 * @param {Event} evt
 */
const handleStateChange = (evt) => {
  /**
   * @type {RTCPeerConnection}
   */
  // @ts-ignore
  const pc = evt.target

  if (!pc)
    connectionError = 'Could not create a gaming session...'
  else if (pc.connectionState === 'connected')
    onconnected({
      size: roomCache.size,
      status: roomCache.type === rtcTypes.OFFER ? peerStatuses.CONNECTED_AS_PLAYER1 : peerStatuses.CONNECTED_AS_PLAYER2,
      turns: roomCache.turns
    })
  else if (pc.connectionState === 'failed')
    connectionError = 'Negotiation failed. Check your network or VPN...'
  else if (pc.connectionState === 'connecting')
    consoleInfo('Connecting the peer...')
  else
    connectionError = 'Unknown network error...'
}

/**
 * @param {String} type
 * @param {RTCIceCandidate?} candidate
 */
const addIceCandidate = async (type, candidate) => {
  if (!candidate)
    return

  await PeerCrypto.waitingForSharedSecret

  const data = {
    type: 'candidate',
    sdpMid: candidate.sdpMid,
    sdpMLineIndex: candidate.sdpMLineIndex,
    candidate: candidate.candidate
  }

  const encrypted = await PeerCrypto.ecnrypt(JSON.stringify(data))

  if (!candidatesCache[encrypted]) {
    room?.addIceCandidate(type, encrypted)
    candidatesCache[encrypted] = true
  }
}

const respondToOffer = async () => {
  if (!room)
    return

  peerConnection.init()
  peerConnection.onicecandidate = (/** @type {RTCPeerConnectionIceEvent} */ { candidate }) => { addIceCandidate(rtcTypes.ANSWER, candidate)  }
  peerConnection.onstatechange = handleStateChange

  await PeerCrypto.setSharedKeyFromJwkString(roomCache.offerPubKey)

  // @ts-ignore
  const remoteOffer = new RTCSessionDescription({ type: rtcTypes.OFFER, sdp: await PeerCrypto.decrypt(roomCache.offer) })

  await peerConnection.setRemoteDescription(remoteOffer)

  const answer = await peerConnection.createAnswer()

  if (!answer || !answer.sdp) {
    connectionError = 'Could not verify the peer connection...'
    return
  }

  await peerConnection.setLocalDescription(new RTCSessionDescription(answer))

  roomCache.answer = answer.sdp
  room.saveAnswer(await PeerCrypto.ecnrypt(answer.sdp))
  room.saveOffer('-')
}

const respondToAnswer = async () => {
  if (!room || roomCache.answer === '-')
    return

  // @ts-ignore
  const remoteAnswer = new RTCSessionDescription({ type: rtcTypes.ANSWER, sdp: await PeerCrypto.decrypt(roomCache.answer) })
  await peerConnection.setRemoteDescription(remoteAnswer)
  room.saveAnswer('-')
}

/**
 * @param {import('firebase/firestore').DocumentData} snapshot
 */
const updateRoomData = async (snapshot) => {
  const newData = snapshot.data() || {}

  if (!Object.keys(newData).length)
    return

  const keysToApply = [
    'size',
    'turns',
    'offerPubKey',
    'iv'
  ]

  for (let i = 0; i < keysToApply.length; i++) {
    const key = keysToApply[i]

    if (!roomCache[key] && newData[key])
      roomCache[key] = newData[key]
  }

  if (!roomCache.answerPubKey && newData.answerPubKey) {
    roomCache.answerPubKey = newData.answerPubKey

    if (roomCache.type === rtcTypes.OFFER) {
      PeerCrypto.setIvFromRemote(newData.iv) // This should be happening before setting shared secret
      await PeerCrypto.setSharedKeyFromJwkString(newData.answerPubKey)

      if (roomCache.type === rtcTypes.OFFER)
        room?.saveOffer(await PeerCrypto.ecnrypt(peerConnection.localDescription()))
    }
  }

  if (!roomCache.offer && newData.offer) {
    roomCache.offer = newData.offer

    if (roomCache.type === rtcTypes.ANSWER)
      respondToOffer()
  }

  if (!roomCache.answer && newData.answer) {
    roomCache.answer = newData.answer
    respondToAnswer()
  }

  /**
   * @param {String[]} candidates
   */
  const parseCandidates = async (candidates) => {
    await peerConnection.remoteDescriptionApplied

    for (let i = 0; i < candidates.length; i++) {
      let candidate = null

      try {
        candidate = JSON.parse(await PeerCrypto.decrypt(candidates[i]))
      } catch (err) {
        consoleWarn(err)
      }

      if (!candidate)
        continue

      if (!candidatesCache[candidates[i]]) {
        await peerConnection.addIceCandidate(candidate.candidate ? candidate : null)
        candidatesCache[candidates[i]] = true
      }
    }
  }

  if (roomCache.type === rtcTypes.OFFER && newData.answerIceCandidates.length) {
    await PeerCrypto.waitingForSharedSecret
    await parseCandidates(newData.answerIceCandidates)
    room?.clearIceCandidates(rtcTypes.ANSWER)
  } else if (roomCache.type === rtcTypes.ANSWER && newData.offerIceCandidates.length) {
    await PeerCrypto.waitingForSharedSecret
    await parseCandidates(newData.offerIceCandidates)
    room?.clearIceCandidates(rtcTypes.OFFER)
  }
}

/**
 * @param {String} roomId
 */
const connectToRoom = async (roomId) => {
  await PeerCrypto.init()

  room = new FirestoreRoom(roomId)
  unsubscribeRoomData = room.subscribeToData(updateRoomData)

  peerConnection.init()
  peerConnection.onicecandidate = (/** @type {RTCPeerConnectionIceEvent} */ { candidate }) => { addIceCandidate(rtcTypes.OFFER, candidate)  }
  peerConnection.onstatechange = handleStateChange
  peerConnection.createDatachannel()

  const offer = await peerConnection.createOffer()

  if (!offer || !offer.sdp) {
    connectionError = 'Could not set up a stable connection...'
    return
  }

  roomCache.type = rtcTypes.OFFER

  room.update({
    offerPubKey: await PeerCrypto.exportPublicKeyToJwk()
  })

  peerConnection.setLocalDescription(offer)
}

const createRoom = async () => {
  await PeerCrypto.init()

  let size = parseInt(page.url.searchParams.get('s') || String(defaultGridSize))

  if (!allowedGridSizes.includes(size))
    size = defaultGridSize

  room = new FirestoreRoom('', await PeerCrypto.exportPublicKeyToJwk(), PeerCrypto.ivString(), size)

  if ((await !room.save())) {
    await popupConfirm('This room ID is already taken. Refresh the page to get a new one.')
    window.location.reload()
  }

  roomLink = page.url.protocol + '//'
    + page.url.host
    + page.url.pathname
    + '?room=' + room.id

  room.subscribeToData(updateRoomData)
  roomCache.type = rtcTypes.ANSWER
}

const copyRoomLink = () => {
  valuesCopied = (copyToClipboard(roomLink))
    ? { class: 'text-green-500', label: 'Link copied!' }
    : { class: 'text-red-500', label: 'Could not copy...' }
}

onMount(() => {
  webrtcSupported = !!(window.RTCPeerConnection)

  if (!webrtcSupported)
    return

  const roomId = page.url.searchParams.get('room')

  if (roomId)
    connectToRoom(roomId)
  else
    createRoom()
})

onDestroy(() => {
  if (unsubscribeRoomData)
    unsubscribeRoomData()
})
</script>
