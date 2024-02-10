<div class={containerClasses}>
  <div class="flex flex-row gap-2 pb-2 pt-3 px-2 items-start">
    <Button
      icon={fasArrowLeft}
      class="text-purple-400"
      on:click={onBack}
    />
    <div class="flex-1 flex flex-row justify-center relative">
      <div>
        <ModesForecaster class={forecasterClasses} color={turnColor} />
        <GameScore
          score1={counts[0]}
          score2={counts[1]}
          score1Class={'font-bold ' + color1}
          score2Class={'font-bold ' + color2}
        />
      </div>
      <p class={turnLabelClasses}>{turnLabel}</p>
    </div>
    <Button
      class="text-purple-400"
      icon={fasRotateRight}
      on:click={showResetDialog}
    />
  </div>
  <div class="flex-1 flex flex-col justify-center w-full max-w-[600px] mx-auto gap-1 px-3">
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
            disabled={computerThinking}
            {hoverCoords}
            on:click={onBlockSelect}
            on:enter={onBlockEnter}
            on:leave={resetSelectCandidates}
          />
        {/each}
      </div>
    {/each}
  </div>
</div>
<Modal
  showing={resetDialogShowing}
  title="Reset the game?"
  okLabel="Reset"
  on:ok={resetGame}
  on:dismiss={hideResetDialog}
>
  <p>This will reset the current board and it's progress. Continue?</p>
</Modal>
<Modal
  showing={winnerShowing}
  hideOk
  hideCancel
  class="font-bold"
  on:dismiss={hideWinnerDialog}
>
  <p>NICE!</p>
  <div class="w-96 h-96 max-w-full max-h-full grid place-items-center">
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
        />
      </div>
      <Button
        label="Play again"
        icon={fasRotateRight}
        class="border border-indigo-300 text-indigo-300 mx-auto mt-10 px-6"
        on:click={showResetDialog}
      />
      <Button
        label="Back"
        class="text-faded mx-auto mt-4 px-6"
        on:click={hideWinnerDialog}
      />
    </div>
  </div>
</Modal>
<script>
import ClickBlock from '$blocks/ClickBlock.svelte'
import { getBlockValue, isEven } from '$lib'
import { enteringMode, enteringMode1, enteringMode2 } from '$stores/user-store'
import { getRandomEnteringMode } from '$lib'
import { onMount, tick } from 'svelte'
import { enterModes } from '$data/objects'
import Button from '$ui/buttons/Button.svelte'
import { fasArrowLeft, fasRotateRight } from '$vendor/icons/fontawesome6-icons'
import { goto } from '$app/navigation'
import GameScore from '$blocks/GameScore.svelte'
import Modal from '$ui/Modal.svelte'
import ModesForecaster from '$blocks/ModesForecaster.svelte'
import platform from '$utils/platform'
import { page } from '$app/stores'
import { defaultGridSize } from '$data/numbers'
import { allowedGridSizes } from '$data/arrays'
import Rooney from '../../ai/Rooney'

const color1 = 'text-blue-300'
const color2 = 'text-pink-300'

/**
 * @type {Array<Array<String|false>>}
 */
let selections = []

/**
 * @type {Array<Array<String|false>>}
 */
let selectCandidates = []

/**
 * @type {Number}
 */
let turnCount = 0

/**
 * @type {Boolean}
 */
let resetDialogShowing = false

/**
 * @type {Boolean}
 */
let winnerShowing = false

/**
 * @type {Boolean}
 */
let gameStarted = false

/**
 * @type {Boolean}
 */
let gameFinished = false

/**
 * @type {Number[]?}
 */
let previewCoords = null

/**
 * @type {Rooney?}
 */
let computer = null

/**
 * @type {Boolean}
 */
let computerThinking = false

/**
 * @type {Number[]?}
 */
let hoverCoords = null

const urlSize = parseInt($page.url.searchParams.get('s') || String(defaultGridSize))
const gridSize = allowedGridSizes.indexOf(urlSize) >= 0 ? urlSize : defaultGridSize

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

/**
 * @param {Number} rowIndex
 * @param {Number} colIndex
 */
const selectInCoordinates = async (rowIndex, colIndex) => {
  const selectionColor = player1Turn ? 'color1' : 'color2'

  convertAdjacentBlocks(
    selectSiblings(rowIndex, colIndex, selectionColor),
    selectionColor
  )

  // All blocks are filled
  if (!Object.values(selections).some(row => row.some(c => !c))) {
    gameFinished = true
    setTimeout(showWinnerDialog, 500)
    return
  }

  turnCount++

  await tick()

  if (player1Turn) {
    $enteringMode = $enteringMode1
    $enteringMode1 = $enteringMode2
    $enteringMode2 = getRandomEnteringMode()
  }

  if (playingWithComputer && !player1Turn)
    selectAsAMachine()
}

const selectAsAMachine = async () => {
  computerThinking = true

  if (!computer)
    computer = new Rooney(selections)

  const coords = await computer.selectBlock($enteringMode)

  computerThinking = false

  if (coords)
    selectInCoordinates(coords[0], coords[1])
}

/**
 * @param {CustomEvent} evt
 */
const onBlockSelect = async ({ detail: { rowIndex, colIndex } }) => {
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

const resetGame = () => {
  resetSelections()
  turnCount = 0
  $enteringMode = enterModes.SINGLE
  $enteringMode1 = getRandomEnteringMode()
  $enteringMode2 = getRandomEnteringMode()
  hideResetDialog()
  gameStarted = false
  gameFinished = false
  computerThinking = false

  if (computer) {
    computer.cancelActiveActions()
    computer = null
  }
}

/**
 * @param {CustomEvent} evt
 */
const onBlockEnter = ({ detail: { rowIndex, colIndex } }) => {
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

const onBack = () => {
  if (gameStarted && !gameFinished && !confirm('Do you want to leave this page now?'))
    return

  goto('/')
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

$: player1Turn = isEven(turnCount)
$: currentTurnColor = player1Turn ? 'color1' : 'color2'
$: turnColor = player1Turn ? color1 : color2
$: counts = getSelectionCounts(selections)
$: forecasterClasses = 'pb-2'
  + (gameFinished ? ' invisible' : '')
$: playMode = $page.url.searchParams.get('m')
$: playingWithComputer = typeof playMode === 'string' && playMode === '0'
$: containerClasses = 'h-device flex flex-col'
  + (computerThinking ? ' cursor-wait' : '')
$: turnLabelClasses = 'absolute -bottom-4 w-full text-center'
  + (playingWithComputer ? ' text-faded' : ' ' + turnColor)
$: turnLabel = player1Turn ? 'Player 1' : (playingWithComputer ? 'Computer...' : 'Player 2' )

resetSelections()
onMount(resetGame)
</script>
