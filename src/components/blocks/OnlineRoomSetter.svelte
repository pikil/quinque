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
const roomIdPattern = /^[0-9A-Z]{6}$/
const copyAvailable = navigatorCopyAvailable()

/**
 * @type {Object.<string, true>}
 */
const candidatesCache = {}

/**
 * @type {Object.<string, true>}
 */
const sentCandidates = {}

/**
 * @type {boolean?}
 */
let webrtcSupported = $state(null)

/**
 * @type {string}
 */
let roomLink = $state('')

/**
 * @type {Object.<'class'|'label', string>?}
 */
let valuesCopied = $state(null)

/**
 * @type {string}
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
 * @type {Object.<'type'|'offer'|'answer'|'offerIceCandidates'|'answerIceCandidates', string|number>}
 */
const roomCache = {}

/**
 * @param {unknown} error
 */
const failNegotiation = (error) => {
  consoleWarn(error)
  connectionError = 'Could not create a gaming session...'
}

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
  else if (pc.connectionState === 'failed')
    connectionError = 'Negotiation failed. Check your network or VPN...'
  else if (pc.connectionState === 'connecting' || pc.connectionState === 'connected')
    consoleInfo('Connecting the peer...')
  else
    connectionError = 'Unknown network error...'
}

const handleChannelOpen = () => {
  onconnected({
    size: roomCache.size,
    status: roomCache.type === rtcTypes.OFFER ? peerStatuses.CONNECTED_AS_PLAYER1 : peerStatuses.CONNECTED_AS_PLAYER2,
    turns: roomCache.turns
  })
}

/**
 * @param {string} type
 */
const initPeerConnection = (type) => {
  peerConnection.init()
  peerConnection.onicecandidate = (/** @type {RTCPeerConnectionIceEvent} */ { candidate }) => { addIceCandidate(type, candidate) }
  peerConnection.onstatechange = handleStateChange
  peerConnection.onchannelopen = handleChannelOpen
}

/**
 * @param {string} type
 * @param {RTCIceCandidate?} candidate
 */
const addIceCandidate = async (type, candidate) => {
  if (!candidate)
    return

  const serialized = JSON.stringify({
    type: 'candidate',
    sdpMid: candidate.sdpMid,
    sdpMLineIndex: candidate.sdpMLineIndex,
    candidate: candidate.candidate
  })

  if (sentCandidates[serialized])
    return

  sentCandidates[serialized] = true

  await PeerCrypto.waitingForSharedSecret
  room?.addIceCandidate(type, await PeerCrypto.encrypt(serialized))
}

const respondToOffer = async () => {
  if (!room)
    return

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
  room.saveAnswer(await PeerCrypto.encrypt(answer.sdp))
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
  if (!snapshot.exists()) {
    connectionError = 'Room not found. Check the room ID or ask for a new link...'
    return
  }

  const newData = snapshot.data()

  const keysToApply = [
    'size',
    'turns',
    'offerPubKey'
  ]

  for (let i = 0; i < keysToApply.length; i++) {
    const key = keysToApply[i]

    if (!roomCache[key] && newData[key])
      roomCache[key] = newData[key]
  }

  if (!roomCache.answerPubKey && newData.answerPubKey) {
    roomCache.answerPubKey = newData.answerPubKey

    if (roomCache.type === rtcTypes.OFFER) {
      await PeerCrypto.setSharedKeyFromJwkString(newData.answerPubKey)
      room?.saveOffer(await PeerCrypto.encrypt(peerConnection.localDescription()))
    }
  }

  if (!roomCache.offer && newData.offer) {
    roomCache.offer = newData.offer

    if (roomCache.type === rtcTypes.ANSWER)
      respondToOffer().catch(failNegotiation)
  }

  if (!roomCache.answer && newData.answer) {
    roomCache.answer = newData.answer
    respondToAnswer().catch(failNegotiation)
  }

  /**
   * @param {string[]} candidates
   */
  const parseCandidates = async (candidates) => {
    await peerConnection.remoteDescriptionApplied

    for (let i = 0; i < candidates.length; i++) {
      if (candidatesCache[candidates[i]])
        continue

      try {
        const candidate = JSON.parse(await PeerCrypto.decrypt(candidates[i]))
        await peerConnection.addIceCandidate(candidate.candidate ? candidate : null)
      } catch (err) {
        consoleWarn(err)
      }

      candidatesCache[candidates[i]] = true
    }
  }

  const remoteType = roomCache.type === rtcTypes.OFFER ? rtcTypes.ANSWER : rtcTypes.OFFER
  const remoteCandidates = (remoteType === rtcTypes.ANSWER ? newData.answerIceCandidates : newData.offerIceCandidates) || []

  if (remoteCandidates.length) {
    await PeerCrypto.waitingForSharedSecret
    await parseCandidates(remoteCandidates)
    room?.removeIceCandidates(remoteType, remoteCandidates)
  }
}

/**
 * @param {import('firebase/firestore').DocumentData} snapshot
 */
const onRoomSnapshot = (snapshot) => {
  updateRoomData(snapshot).catch(failNegotiation)
}

/**
 * @param {string} roomId
 */
const connectToRoom = async (roomId) => {
  if (!roomIdPattern.test(roomId)) {
    connectionError = 'Room not found. Check the room ID or ask for a new link...'
    return
  }

  await PeerCrypto.init()

  roomCache.type = rtcTypes.OFFER
  initPeerConnection(rtcTypes.OFFER)
  peerConnection.createDatachannel()

  const offer = await peerConnection.createOffer()

  if (!offer || !offer.sdp) {
    connectionError = 'Could not set up a stable connection...'
    return
  }

  await peerConnection.setLocalDescription(offer)

  room = new FirestoreRoom(roomId)
  room.update({
    offerPubKey: await PeerCrypto.exportPublicKeyToJwk()
  })

  unsubscribeRoomData = room.subscribeToData(onRoomSnapshot)
}

const createRoom = async () => {
  await PeerCrypto.init()

  roomCache.type = rtcTypes.ANSWER
  initPeerConnection(rtcTypes.ANSWER)

  let size = parseInt(page.url.searchParams.get('s') || String(defaultGridSize), 10)

  if (!allowedGridSizes.includes(size))
    size = defaultGridSize

  room = new FirestoreRoom('', await PeerCrypto.exportPublicKeyToJwk(), size)

  if (!(await room.save())) {
    await popupConfirm('Could not create a room. Refresh the page to try again.')
    window.location.reload()
    return
  }

  roomLink = page.url.protocol + '//'
    + page.url.host
    + page.url.pathname
    + '?room=' + room.id

  unsubscribeRoomData = room.subscribeToData(onRoomSnapshot)
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

  if (!navigator.onLine) {
    connectionError = 'You are offline. Online games need an internet connection...'
    return
  }

  const roomId = page.url.searchParams.get('room')

  const setup = roomId ? connectToRoom(roomId.toUpperCase()) : createRoom()
  setup.catch(failNegotiation)
})

onDestroy(() => {
  if (unsubscribeRoomData)
    unsubscribeRoomData()
})
</script>
