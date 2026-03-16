import { enterModes } from '$data/objects'
import {
  customIconAxesDirection,
  customIconSingleDot,
  customIconDiagonalsDirection,
  customIconFallingDiagonal,
  customIconBackingDiagonal,
  customIconHorizontal,
  customIconVertical
} from '$vendor/icons/custom-icons'

export const getRandomEnteringMode = () => Math.floor(Math.random() * Object.keys(enterModes).length)

/**
 * @param {number} num
 * @returns {boolean}
 */
export const isEven = num => !num || !(num %2)

/**
* @param {number} mode
@returns {string}
*/
export const getModeIcon = (mode) => {
  switch (mode) {
    case enterModes.AXES: return customIconAxesDirection
    case enterModes.DIAGONAL: return customIconDiagonalsDirection
    case enterModes.RISING: return customIconFallingDiagonal
    case enterModes.FALLING: return customIconBackingDiagonal
    case enterModes.HORIZONTAL: return customIconHorizontal
    case enterModes.VERTICAL: return customIconVertical
    default: return customIconSingleDot
  }
}

/**
 * @param {Array<Array<string|false>>} selArr
 * @param {number} row
 * @param {number} col
 * @param {string} color
 * @returns {number}
 */
export const getBlockValue = (selArr, row, col, color) => {
  if (selArr[row] === undefined || selArr[row][col] === undefined)
    return 0

  let value = 5

  const prevRow = row - 1
  const nextRow = row + 1

  if (
    selArr[prevRow] && selArr[prevRow][col] === color
    || selArr[nextRow] && selArr[nextRow][col] === color
  )
    value--

  if (
    selArr[row][col + 1] === color
    || selArr[row][col - 1] === color
  )
    value--

  return value
}

/**
 * @param {number} length
 */
export const generateTurnsSequence = (length) => {
  const turns = []
  turns.push(enterModes.SINGLE)

  for (let t = 1; t < length; t++)
    turns.push(getRandomEnteringMode())

  return turns
}
