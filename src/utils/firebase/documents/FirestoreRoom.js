import { allowedGridSizes } from '$data/arrays'
import { defaultGridSize } from '$data/numbers'
import { rtcTypes } from '$data/objects'
import { generateTurnsSequence } from '$lib'
import { randomStr } from '$utils/generators'
import FirestoreDocument from './FirestoreDocument'
import { arrayUnion } from 'firebase/firestore'

/**
 * @param {string} type
 * @returns {string}
 */
const generateCandidatesKey = type => type === rtcTypes.OFFER ? 'offerIceCandidates' : 'answerIceCandidates'

/**
 * @param {Date} date
 * @returns {string}
 */
const generateName = (date) => {
  const monthNum = (date.getMonth() + 1) * 31
  const days = date.getDate()
  return (monthNum + days).toString().padStart(3, '0') + randomStr(3)
}

export default class FirestoreRoom extends FirestoreDocument {
  /**
   * @param {string} id
   * @param {string} [answerPubKey]
   * @param {string} [iv]
   * @param {number} [size]
   */
  constructor (id, answerPubKey, iv, size = defaultGridSize) {
    const date = new Date()

    super(
      id || generateName(date),
      '/quinque-rooms',
      [
        'created',
        'size',
        'offerIceCandidates',
        'answerIceCandidates',
        'turns',
        'answerPubKey',
        'iv'
      ]
    )

    if (!id) {
      this.created = date
      this.size = (allowedGridSizes.includes(size)) ? size : defaultGridSize
      this.offerIceCandidates = []
      this.answerIceCandidates = []
      this.turns = generateTurnsSequence(this.size * this.size)
      this.answerPubKey = answerPubKey
      this.iv = iv
    }
  }

  /**
   * @param {string} offer
   */
  saveOffer (offer) {
    this.offer = offer
    this.update({ offer })
  }

  /**
   * @param {string} answer
   */
  saveAnswer (answer) {
    this.answer = answer
    this.update({ answer })
  }

  /**
   * @param {string} type
   * @param {Object?} candidate
   */
  addIceCandidate (type, candidate) {
    const key = generateCandidatesKey(type)
    this.update({ [key]: arrayUnion(candidate) })
  }

  /**
   * @param {string} type
   */
  clearIceCandidates (type) {
    const key = generateCandidatesKey(type)
    this.update({ [key]: [] })
  }
}
