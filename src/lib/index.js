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
 * @param {Number} num
 * @returns {Boolean}
 */
export const isEven = num => !num || !(num %2)

/**
* @param {Number} mode
@returns {String}
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
 * @param {Array<Array<String|false>>} selArr
 * @param {Number} row
 * @param {Number} col
 * @param {String} color
 * @returns {Number}
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
