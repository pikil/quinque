<div class="h-device relative">
  <div class={colClasses}>
    <div class="flex flex-row gap-2 pb-2 pt-3 px-2 items-start">
      <Button
        icon={fasArrowLeft}
        class="text-primary"
        onclick={onBack}
      />
      <div class="flex-1 flex flex-row justify-center relative">
        <div>
          <GameScore
            score1={counts[0]}
            score2={counts[1]}
            score1Class={color1}
            score2Class={color2}
          />
          <ModesForecaster
            class={forecasterClasses}
            color={turnColor}
          />
        </div>
      </div>
      <Button
        class="text-primary"
        icon={fasRotateRight}
        onclick={showResetDialog}
      />
    </div>
    <div class="flex-1 flex flex-col justify-center w-full max-w-[600px] mx-auto gap-1 px-3">
      <div class="relative">
        <p class={turnLabelClasses}>{turnLabel}</p>
      </div>
      <!-- eslint-disable-next-line no-unused-vars -->
      {#each { length: gridSize } as _, rowIndex}
        <div class="flex flex-row gap-1">
          <!-- eslint-disable-next-line no-unused-vars -->
          {#each { length: gridSize } as _, colIndex}
            <ClickBlock
              {rowIndex}
              {colIndex}
              selected={selections[rowIndex][colIndex]}
              selectCandidate={selectCandidates[rowIndex][colIndex]}
              hoverColor={currentTurnColor}
              disabled={thinking}
              {hoverCoords}
              onclick={onBlockSelect}
              onenter={onBlockEnter}
              onleave={resetSelectCandidates}
            />
          {/each}
        </div>
      {/each}
    </div>
    <div class="flex flex-row justify-center pb-2">
      <Button
        label="Rules"
        class="text-faded text-sm"
        onclick={showRules}
      />
    </div>
  </div>
</div>
<Modal
  showing={resetDialogShowing}
  title="Reset the game?"
  okLabel="Reset"
  onok={() => { resetGame() }}
  ondismiss={hideResetDialog}
>
  <p>This will reset the current board and it's progress. Continue?</p>
</Modal>
<Modal
  showing={winnerShowing}
  hideOk
  hideCancel
  class="font-bold"
  ondismiss={hideWinnerDialog}
>
  <p>NICE!</p>
  <div class="h-96 max-w-full max-h-full flex flex-col justify-center items-center">
    <div>
      <div class="text-4xl text-center">
        {#if counts[0] > counts[1]}
          <p class={color1}>Player 1 won!</p>
        {:else if counts[0] < counts[1]}
          <p class={color2}>Player 2 won!</p>
        {:else}
          <p class="text-white">A tie!</p>
        {/if}
        <GameScore
          score1={counts[0]}
          score2={counts[1]}
          score1Class={'font-bold ' + color1}
          score2Class={'font-bold ' + color2}
          class="pt-6 pb-8"
        />
      </div>
      <Button
        label="Play again"
        icon={fasRotateRight}
        class="border border-primary text-primary mx-auto px-6"
        onclick={showResetDialog}
      />
      <Button
        label="Back"
        class="text-faded mx-auto mt-4 px-6"
        onclick={hideWinnerDialog}
      />
    </div>
  </div>
</Modal>
<Modal showing={awaitingForPeer || peerDisconnected} title="Peer connection" hideOk ondismiss={onBack}>
  {#if peerDisconnected}
    <p>Player disconnected... Please start another session.</p>
  {:else}
    <OnlineRoomSetter onconnected={onPeerConnect} />
  {/if}
</Modal>
<Modal showing={showingRules} hideOk title="Game rules" ondismiss={hideRules}>
  <RulesBlock />
</Modal>
<script>
import ClickBlock from '$blocks/ClickBlock.svelte'
import { generateTurnsSequence, getBlockValue, isEven } from '$lib'
import { enteringMode, enteringMode1, enteringMode2 } from '$stores/user-store'
import { getRandomEnteringMode } from '$lib'
import { onMount, tick } from 'svelte'
import { enterModes, peerStatuses, playModes } from '$data/objects'
import Button from '$ui/buttons/Button.svelte'
import { fasArrowLeft, fasRotateRight } from '$vendor/icons/fontawesome6-icons'
import { beforeNavigate, goto } from '$app/navigation'
import GameScore from '$blocks/GameScore.svelte'
import Modal from '$ui/Modal.svelte'
import ModesForecaster from '$blocks/ModesForecaster.svelte'
import platform from '$utils/platform'
import { page } from '$app/state'
import { defaultGridSize } from '$data/numbers'
import { allowedGridSizes } from '$data/arrays'
import Rooney from '../../ai/Rooney'
import OnlineRoomSetter from '$blocks/OnlineRoomSetter.svelte'
import peerConnection from '$utils/rtc/connection'
import RulesBlock from '$blocks/RulesBlock.svelte'
import { homePath } from '$data/strings'
import { popupConfirm } from '$utils/validation'
import { headerTitle } from '$stores/layout-store'

const color1 = 'text-color1'
const color2 = 'text-color2'

/**
 * @type {Array<Array<String|false>>}
 */
let selections = $state([])

/**
 * @type {Array<Array<String|false>>}
 */
let selectCandidates = $state([])

/**
 * @type {Number}
 */
let turnCount = $state(0)

/**
 * @type {Number[]}
 */
let predefinedTurns = []

/**
 * @type {Boolean}
 */
let resetDialogShowing = $state(false)

/**
 * @type {Boolean}
 */
let winnerShowing = $state(false)

/**
 * @type {Boolean}
 */
let gameStarted = false

/**
 * @type {Boolean}
 */
let gameFinished = $state(false)

/**
 * @type {Number[]?}
 */
let previewCoords = $state(null)

/**
 * @type {Rooney?}
 */
let computer = null

/**
 * @type {Boolean}
 */
let thinking = $state(false)

/**
 * @type {Number[]?}
 */
let hoverCoords = $state(null)

/**
 * @type {Number}
 */
let playMode = $state(playModes.AI)

/**
 * @type {Number?}
 */
let peerStatus = $state(null)

/**
 * @type {Boolean}
 */
let showingRules = $state(false)

/**
 * @param {Object.<String, any>} data
 */
const sendPeerMessage = data => peerConnection.sendChannelMessage(JSON.stringify(data))

const urlSize = parseInt(page.url.searchParams.get('s') || String(defaultGridSize))
let gridSize = $state(allowedGridSizes.indexOf(urlSize) >= 0 ? urlSize : defaultGridSize)

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 * @param {String} selectionColor
 * @returns {Number[]|undefined}
 */
const selectBlock = (rowIndex, colIndex, selectionColor) => {
  if (!selections[rowIndex] || selections[rowIndex][colIndex] !== false)
    return

  selections[rowIndex][colIndex] = selectionColor

  return [rowIndex, colIndex]
}

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 * @returns {Array<Number[]>}
 */
const getCoordsInAxes = (rowIndex, colIndex) => [
  [rowIndex, colIndex],
  [rowIndex - 1, colIndex],
  [rowIndex + 1, colIndex],
  [rowIndex, colIndex - 1],
  [rowIndex, colIndex + 1]
]

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 * @returns {Array<Number[]>}
 */
const getCoordsInDiagonals = (rowIndex, colIndex) => [
  [rowIndex, colIndex],
  [rowIndex - 1, colIndex - 1],
  [rowIndex - 1, colIndex + 1],
  [rowIndex + 1, colIndex - 1],
  [rowIndex + 1, colIndex + 1]
]

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 * @returns {Array<Number[]>}
 */
const getCoordsInFalling = (rowIndex, colIndex) => [
  [rowIndex, colIndex],
  [rowIndex + 1, colIndex - 1],
  [rowIndex + 2, colIndex - 2],
  [rowIndex - 1, colIndex + 1],
  [rowIndex - 2, colIndex + 2]
]

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 * @returns {Array<Number[]>}
 */
const getCoordsInBacking = (rowIndex, colIndex) => [
  [rowIndex, colIndex],
  [rowIndex - 1, colIndex - 1],
  [rowIndex - 2, colIndex - 2],
  [rowIndex + 1, colIndex + 1],
  [rowIndex + 2, colIndex + 2]
]

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 * @returns {Array<Number[]>}
 */
const getCoordsInHorizontal = (rowIndex, colIndex) => [
  [rowIndex, colIndex],
  [rowIndex, colIndex - 1],
  [rowIndex, colIndex - 2],
  [rowIndex, colIndex + 1],
  [rowIndex, colIndex + 2]
]

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 * @returns {Array<Number[]>}
 */
const getCoordsInVertical = (rowIndex, colIndex) => [
  [rowIndex, colIndex],
  [rowIndex - 1, colIndex],
  [rowIndex - 2, colIndex],
  [rowIndex + 1, colIndex],
  [rowIndex + 2, colIndex]
]

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 * @param {String} selectionColor
 * @returns {Array<Number[]|undefined>}
 */
const selectSiblings = (rowIndex, colIndex, selectionColor) => {
  const selected = []

  /**
   * @type {Array<Number[]>}
   */
  let coords = []

  switch ($enteringMode) {
    case enterModes.AXES: coords = getCoordsInAxes(rowIndex, colIndex); break
    case enterModes.DIAGONAL: coords = getCoordsInDiagonals(rowIndex, colIndex); break
    case enterModes.RISING: coords = getCoordsInFalling(rowIndex, colIndex); break
    case enterModes.FALLING: coords = getCoordsInBacking(rowIndex, colIndex); break
    case enterModes.HORIZONTAL: coords = getCoordsInHorizontal(rowIndex, colIndex); break
    case enterModes.VERTICAL: coords = getCoordsInVertical(rowIndex, colIndex); break
    default: coords = [[rowIndex, colIndex]]; break
  }

  for (let i = 0; i < coords.length; i++)
    selected.push(selectBlock(coords[i][0], coords[i][1], selectionColor))

  return selected
}

/**
 * @param {Array<Number[]|undefined>} lastSelectedArr
 * @param {String} selectionColor
 */
const getAdjacentBlockCoordinates = (lastSelectedArr, selectionColor) => {
  const coords = []

  for (let i = 0; i < lastSelectedArr.length; i++) {
    if (!lastSelectedArr[i])
      continue

    // @ts-ignore
    const [row, col] = lastSelectedArr[i]
    const nextCol1 = col + 1
    const nextCol2 = col + 2
    const prevCol1 = col - 1
    const prevCol2 = col - 2
    const nextRow1 = row + 1
    const nextRow2 = row + 2
    const prevRow1 = row - 1
    const prevRow2 = row - 2

    // Next horizontal
    if (selections[row][nextCol2] === selectionColor && selections[row][nextCol1] !== false)
      coords.push([row, nextCol1])

    // Prev horizontal
    if (selections[row][prevCol2] === selectionColor && selections[row][prevCol1] !== false)
      coords.push([row, prevCol1])

    // Next vertical
    if (selections[nextRow2] && selections[nextRow2][col] === selectionColor && selections[nextRow1][col] !== false)
      coords.push([nextRow1, col])

    // Prev vertical
    if (selections[prevRow2] && selections[prevRow2][col] === selectionColor && selections[prevRow1][col] !== false)
      coords.push([prevRow1, col])
  }

  return coords
}

/**
 * @param {Array<Number[]|undefined>} lastSelectedArr
 * @param {String} selectionColor
 */
const convertAdjacentBlocks = (lastSelectedArr, selectionColor) => {
  const coords = getAdjacentBlockCoordinates(lastSelectedArr, selectionColor)

  for (let i = 0; i < coords.length; i++)
    selections[coords[i][0]][coords[i][1]] = selectionColor
}

const selectAsAMachine = async () => {
  thinking = true

  if (!computer)
    computer = new Rooney(selections)

  const coords = await computer.selectBlock($enteringMode)

  thinking = false

  if (coords)
    selectInCoordinates(coords[0], coords[1], true)
}

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 * @param {Boolean} [isEmulator] - Whether this is a turn emulator (when it's either a computer or a remote player)
 */
const selectInCoordinates = async (rowIndex, colIndex, isEmulator) => {
  if (gameFinished)
    return

  const selectionColor = player1Turn ? 'color1' : 'color2'
  previewCoords = null

  convertAdjacentBlocks(
    selectSiblings(rowIndex, colIndex, selectionColor),
    selectionColor
  )

  // All blocks are filled
  if (!Object.values(selections).some(row => row.some(c => !c))) {
    if (playingOnline)
      sendPeerMessage({ type: 'placedBlock', rowIndex, colIndex })

    gameFinished = true
    setTimeout(showWinnerDialog, 500)
    return
  }

  turnCount++

  await tick()

  if (player1Turn) {
    $enteringMode = $enteringMode1
    $enteringMode1 = $enteringMode2
    $enteringMode2 = (playingOnline) ? predefinedTurns[turnCount + 1] : getRandomEnteringMode()
  }

  if (isEmulator === true)
    return

  if (playingWithComputer) {
    selectAsAMachine()
  } else if (playingOnline) {
    sendPeerMessage({ type: 'placedBlock', rowIndex, colIndex })
    thinking = true
  }
}

/**
 * @param {PosData} data
 */
const onBlockSelect = async ({ rowIndex, colIndex }) => {
  if (platform.is.webMobile) {
    if (!previewCoords || previewCoords[0] !== rowIndex || previewCoords[1] !== colIndex) {
      previewCoords = [rowIndex, colIndex]
      return
    }
  }

  gameStarted = true
  selectInCoordinates(rowIndex, colIndex)
}

const resetSelectCandidates = () => {
  /**
   * @type {String|false[][]}
   */
  const arr = []

  for (let i = 0; i < gridSize; i++) {
    arr[i] = []

    for (let j = 0; j < gridSize; j++)
      arr[i][j] = false
  }

  selectCandidates = arr
  hoverCoords = null
  previewCoords = null
}

const resetSelections = () => {
  /**
   * @type {String|false[][]}
   */
  const arr = []

  for (let i = 0; i < gridSize; i++) {
    arr[i] = []

    for (let j = 0; j < gridSize; j++)
      arr[i][j] = false
  }

  selections = arr

  resetSelectCandidates()
}

/**
 * @param {Array<Array<String|false>>} selArr
 */
const getSelectionCounts = (selArr) => {
  let color1Count = 0
  let color2Count = 0

  for (let i = 0; i < selArr.length; i++) {
    for (let j = 0; j < selArr[i].length; j++) {
      if (selArr[i][j] === 'color1')
        color1Count += getBlockValue(selArr, i, j, 'color1')
      else if (selArr[i][j] === 'color2')
        color2Count += getBlockValue(selArr, i, j, 'color2')
    }
  }

  return [color1Count, color2Count]
}

/**
 * @param {Boolean} [isReaction] Whether this reset is triggered by a remote reset
 */
const resetGame = (isReaction) => {
  resetSelections()
  turnCount = 0
  $enteringMode = enterModes.SINGLE
  $enteringMode1 = getRandomEnteringMode()
  $enteringMode2 = getRandomEnteringMode()
  hideResetDialog()
  gameStarted = false
  gameFinished = false
  thinking = false
  previewCoords = null

  if (computer) {
    computer.cancelActiveActions()
    computer = null
  } else if (playingOnline) {
    if (peerStatus === peerStatuses.CONNECTED_AS_PLAYER1)
      thinking = true

    if (!isReaction) {
      predefinedTurns = generateTurnsSequence(gridSize * gridSize)
      $enteringMode1 = predefinedTurns[1]
      $enteringMode2 = predefinedTurns[2]
      sendPeerMessage({ type: 'resetGame', turns: predefinedTurns })
    }
  }
}

/**
 * @param {PosData} data
 */
const onBlockEnter = ({ rowIndex, colIndex }) => {
  /**
   * @type {Array<Number[]>}
   */
  let coords = []

  switch ($enteringMode) {
    case enterModes.AXES: coords = getCoordsInAxes(rowIndex, colIndex); break
    case enterModes.DIAGONAL: coords = getCoordsInDiagonals(rowIndex, colIndex); break
    case enterModes.RISING: coords = getCoordsInFalling(rowIndex, colIndex); break
    case enterModes.FALLING: coords = getCoordsInBacking(rowIndex, colIndex); break
    case enterModes.HORIZONTAL: coords = getCoordsInHorizontal(rowIndex, colIndex); break
    case enterModes.VERTICAL: coords = getCoordsInVertical(rowIndex, colIndex); break
    default: break
  }

  for (let i = 0; i < coords.length; i++)
    if (selectCandidates[coords[i][0]] !== undefined && selectCandidates[coords[i][0]][coords[i][1]] !== undefined)
      selectCandidates[coords[i][0]][coords[i][1]] = currentTurnColor

  hoverCoords = [rowIndex, colIndex]
}

const onBack = async () => {
  if (gameStarted && !gameFinished && !(await popupConfirm('Finish the game and go to main menu?')))
    return

  goto(homePath)
}

const showResetDialog = () => {
  if (winnerShowing) {
    hideWinnerDialog()
    setTimeout(resetGame, 250)
    return
  }

  if (!gameStarted || gameFinished) {
    resetGame()
    return
  }

  resetDialogShowing = true
}

const hideResetDialog = () => {
  resetDialogShowing = false
}

const showWinnerDialog = () => {
  winnerShowing = true
}

const hideWinnerDialog = () => {
  winnerShowing = false
}

/**
 * @param {ConnData} data
 */
const onPeerConnect = ({ size, status, turns }) => {
  gridSize = size
  peerStatus = status
  predefinedTurns = turns

  resetSelections()

  $enteringMode1 = turns[1]
  $enteringMode2 = turns[2]

  peerConnection.onstatechange = (/** @type {Event} */ evt) => {
    /**
     * @type {RTCPeerConnection}
     */
    // @ts-ignore
    const pc = evt.target
    const badStatuses = ['disconnected', 'failed']

    if (!pc || badStatuses.includes(pc.connectionState))
      peerStatus = peerStatuses.DISCONNECTED
  }

  peerConnection.onmessage = (/** @type {MessageEvent} */ { data }) => {
    try {
      const { type, rowIndex, colIndex, turns } = JSON.parse(data)

      switch (type) {
        case 'placedBlock':
          selectInCoordinates(rowIndex, colIndex, true)
          thinking = false
          break
        case 'resetGame': {
          const reset = () => {
            resetGame(true)

            if (turns) {
              predefinedTurns = turns
              $enteringMode1 = turns[1]
              $enteringMode2 = turns[2]
            }
          }

          if (winnerShowing) {
            hideWinnerDialog()
            setTimeout(reset, 250)
          } else {
            reset()
          }
          break
        }
        case 'left':
          peerConnection?.close()
          peerStatus = peerStatuses.DISCONNECTED
          break
        default:
          break
      }
    } catch (error) {
      peerConnection?.close()
      peerStatus = peerStatuses.DISCONNECTED
    }
  }

  if (peerStatus === peerStatuses.CONNECTED_AS_PLAYER1)
    thinking = true
}

const showRules = () => {
  showingRules = true
}

const hideRules = () => {
  showingRules = false
}

let player1Turn = $derived(isEven(turnCount))
let currentTurnColor = $derived(player1Turn ? 'color1' : 'color2')
let turnColor = $derived(player1Turn ? color1 : color2)
let counts = $derived(getSelectionCounts(selections))
let forecasterClasses = $derived('pt-3'
  + (gameFinished ? ' invisible' : ''))
let playingWithComputer = $derived(playMode === playModes.AI)
let playingOnline = $derived(!playingWithComputer && playMode === playModes.FRIEND_ONLINE)
let colClasses = $derived('h-full flex flex-col relative'
  + (thinking ? ' cursor-wait' : ''))
let turnLabelColorClasses = $derived(playingWithComputer && !player1Turn
  || (playingOnline && player1Turn && peerStatus === peerStatuses.CONNECTED_AS_PLAYER1)
  || (playingOnline && !player1Turn && peerStatus === peerStatuses.CONNECTED_AS_PLAYER2)
  ? ' text-faded'
  : ' ' + turnColor)
let turnLabelClasses = $derived('font-bold text-center text-sm pb-1' // 'absolute -bottom-4 w-full text-center'
  + turnLabelColorClasses)
let turnLabel = $derived(previewCoords
  ? 'Confirm selection'
  : (player1Turn
    ? (playingWithComputer || (playingOnline && peerStatus === peerStatuses.CONNECTED_AS_PLAYER2) ? 'Your turn' : 'Player\'s 1 turn...')
    : (playingWithComputer
      ? 'Computer...'
      : ((playingOnline && peerStatus === peerStatuses.CONNECTED_AS_PLAYER1) ? 'Your turn' : 'Player\'s 2 turn...')
    )
  ))
let awaitingForPeer = $derived(peerStatus === peerStatuses.CONNECTING)
let peerDisconnected = $derived(playingOnline && peerStatus === peerStatuses.DISCONNECTED)

$headerTitle = null

resetSelections()

onMount(() => {
  const room = page.url.searchParams.get('room')

  if (room) {
    playMode = playModes.FRIEND_ONLINE
    peerStatus = peerStatuses.CONNECTING
  } else {
    const m = parseInt(page.url.searchParams.get('m') || String(playModes.AI))

    if (Object.values(playModes).includes(m))
      playMode = m

    if (playMode === playModes.FRIEND_ONLINE)
      peerStatus = peerStatuses.CONNECTING
  }

  resetGame()
})

beforeNavigate(() => {
  sendPeerMessage({ type: 'left' })

  if (playingOnline)
    peerConnection?.close()
})
</script>
