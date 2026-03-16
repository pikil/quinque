import { enterModes } from '$data/objects'
import { getBlockValue } from '$lib'

/**
 * Indicates the color used in the selections
 * @type {string}
 */
const color = 'color2'

/**
 * @param {number} i
 * @param {number} j
 * @param {Array<Array<string|false>>} selections
 * @param {Array<number[]>} coords
 * @returns {number}
 */
const sumGetter = (i, j, selections, coords) => {
  let sum = getBlockValue(selections, i, j, color)
  let k = coords.length

  while (k--) {
    const [row, col] = coords[k]

    if (selections[row] && selections[row][col] === false)
      sum += getBlockValue(selections, row, col, color)
  }

  return sum
}

/**
 * This is v0.0.1 of AI to at least have a decent play with
 * @class
 */
export default class {
  /**
   * @param {Array<Array<string|false>>} selections
   */
  constructor (selections) {
    this.selections = selections
    this.thinking = false
  }

  cancelActiveActions () {
    this.requestId = Date.now()
  }

  /**
   * @param {Function} coordsFn
   * @returns {Array<number[]>}
   */
  getBenefitSums (coordsFn) {
    const candidates = []

    for (let i = 0; i < this.selections.length; i++) {
      const row = this.selections[i]

      for (let j = 0; j < row.length; j++) {
        const value = row[j]

        if (value)
          continue

        candidates.push([i, j, sumGetter(i, j, this.selections, coordsFn(i, j))])
      }
    }

    candidates.sort(([, , sumA], [, , sumB]) => sumB - sumA)

    return candidates
  }

  /**
   * @returns {number[]}
   */
  selectSingleBlock () {
    const candidates = this.getBenefitSums(() => [])
    const randomIndex = Math.floor(Math.random() * candidates.length)

    return [candidates[randomIndex][0], candidates[randomIndex][1]]
  }

  /**
   * @returns {number[]}
   */
  selectInAxes () {
    const candidates = this.getBenefitSums(
      /**
       * @param {number} i
       * @param {number} j
       * @returns {Array<number[]>}
       */
      (i, j) => [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1]
      ]
    )

    return [candidates[0][0], candidates[0][1]]
  }

  /**
   * @returns {number[]}
   */
  selectInDiagonals () {
    const candidates = this.getBenefitSums(
      /**
       * @param {number} i
       * @param {number} j
       * @returns {Array<number[]>}
       */
      (i, j) => [
        [i + 1, j + 1],
        [i + 1, j - 1],
        [i - 1, j - 1],
        [i - 1, j + 1]
      ]
    )

    return [candidates[0][0], candidates[0][1]]
  }

  /**
   * @returns {number[]}
   */
  selectInHorizontal () {
    const candidates = this.getBenefitSums(
      /**
       * @param {number} i
       * @param {number} j
       * @returns {Array<number[]>}
       */
      (i, j) => [
        [i, j + 1],
        [i, j + 2],
        [i, j - 1],
        [i, j - 2]
      ]
    )

    return [candidates[0][0], candidates[0][1]]
  }

  /**
   * @returns {number[]}
   */
  selectInVertical () {
    const candidates = this.getBenefitSums(
      /**
       * @param {number} i
       * @param {number} j
       * @returns {Array<number[]>}
       */
      (i, j) => [
        [i + 1, j],
        [i + 2, j],
        [i - 1, j],
        [i - 2, j]
      ]
    )

    return [candidates[0][0], candidates[0][1]]
  }

  /**
   * @returns {number[]}
   */
  selectInRisingDiagonal () {
    const candidates = this.getBenefitSums(
      /**
       * @param {number} i
       * @param {number} j
       * @returns {Array<number[]>}
       */
      (i, j) => [
        [i - 1, j + 1],
        [i - 2, j + 2],
        [i + 1, j - 1],
        [i + 2, j - 2]
      ]
    )

    return [candidates[0][0], candidates[0][1]]
  }

  /**
   * @returns {number[]}
   */
  selectInFallingDiagonal () {
    const candidates = this.getBenefitSums(
      /**
       * @param {number} i
       * @param {number} j
       * @returns {Array<number[]>}
       */
      (i, j) => [
        [i + 1, j + 1],
        [i + 2, j + 2],
        [i - 1, j - 1],
        [i - 2, j - 2]
      ]
    )

    return [candidates[0][0], candidates[0][1]]
  }

  /**
   * @param {number} mode
   * @returns {Promise<number[]?>}
   */
  selectBlock (mode) {
    const requestId = Date.now()
    this.requestId = requestId

    return new Promise((resolve) => {
      setTimeout(() => {
        // Another action is launched alteady
        if (this.requestId !== requestId) {
          resolve(null)
          return
        }

        switch (mode) {
          case enterModes.AXES: resolve(this.selectInAxes()); break
          case enterModes.DIAGONAL: resolve(this.selectInDiagonals()); break
          case enterModes.HORIZONTAL: resolve(this.selectInHorizontal()); break
          case enterModes.VERTICAL: resolve(this.selectInVertical()); break
          case enterModes.FALLING: resolve(this.selectInFallingDiagonal()); break
          case enterModes.RISING: resolve(this.selectInRisingDiagonal()); break
          default: resolve(this.selectSingleBlock()); break
        }
      }, 1500)
    })
  }
}
