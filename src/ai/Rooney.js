import { enterModes } from '$data/objects'
import { getBlockValue } from '$lib'

/**
 * Indicates the color used in the selections
 * @type {String}
 */
const color = 'color2'

/**
 * @param {Number} i
 * @param {Number} j
 * @param {Array<Array<String|false>>} selections
 * @param {Array<Number[]>} coords
 * @returns {Number}
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
   * @param {Array<Array<String|false>>} selections
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
   * @returns {Array<Number[]>}
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
   * @returns {Number[]}
   */
  selectSingleBlock () {
    const candidates = this.getBenefitSums(() => [])
    const randomIndex = Math.floor(Math.random() * candidates.length)

    return [candidates[randomIndex][0], candidates[randomIndex][1]]
  }

  /**
   * @returns {Number[]}
   */
  selectInAxes () {
    const candidates = this.getBenefitSums(
      /**
       * @param {Number} i
       * @param {Number} j
       * @returns {Array<Number[]>}
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
   * @returns {Number[]}
   */
  selectInDiagonals () {
    const candidates = this.getBenefitSums(
      /**
       * @param {Number} i
       * @param {Number} j
       * @returns {Array<Number[]>}
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
   * @returns {Number[]}
   */
  selectInHorizontal () {
    const candidates = this.getBenefitSums(
      /**
       * @param {Number} i
       * @param {Number} j
       * @returns {Array<Number[]>}
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
   * @returns {Number[]}
   */
  selectInVertical () {
    const candidates = this.getBenefitSums(
      /**
       * @param {Number} i
       * @param {Number} j
       * @returns {Array<Number[]>}
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
   * @returns {Number[]}
   */
  selectInRisingDiagonal () {
    const candidates = this.getBenefitSums(
      /**
       * @param {Number} i
       * @param {Number} j
       * @returns {Array<Number[]>}
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
   * @returns {Number[]}
   */
  selectInFallingDiagonal () {
    const candidates = this.getBenefitSums(
      /**
       * @param {Number} i
       * @param {Number} j
       * @returns {Array<Number[]>}
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
   * @param {Number} mode
   * @returns {Promise<Number[]?>}
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
