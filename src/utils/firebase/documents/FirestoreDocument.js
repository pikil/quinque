import { consoleWarn } from '$utils/console'
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import { noop } from 'svelte/internal'
import { getDb } from '../app'

/**
 * @param {Object.<String, any>} instance
 * @returns {Object.<String, any>}
 */
const buildObject = (instance) => {
  const obj = Object.create(null)

  for (let i = 0; i < instance.fields.length; i++)
    obj[instance.fields[i]] = instance[instance.fields[i]]

  return obj
}

export default class FirestoreDocument {
  /**
   * @param {String} id
   * @param {String} collection
   * @param {String[]} fields
   */
  constructor (id, collection, fields) {
    this.id = id
    this.collection = collection
    this.fields = fields
    this.ignoreAuth = false
  }

  /**
   * @returns {import('firebase/firestore').DocumentReference<import('firebase/firestore').DocumentData>}
   */
  get ref () {
    if (!this._ref)
      this._ref = doc(getDb(), this.collection, this.id)

    return this._ref
  }

  /**
   * @returns {Promise<import('firebase/firestore').DocumentSnapshot<import('firebase/firestore').DocumentData>>}
   */
  fetch () {
    return getDoc(this.ref)
  }

  /**
   * @returns {Promise<void>}
   */
  create () {
    return setDoc(this.ref, buildObject(this))
  }

  /**
   * @param {Boolean} overwrite
   * @param {Function} presaveFn
   * @returns {Promise<Boolean>}
   */
  async save (overwrite = false, presaveFn = noop) {
    try {
      const docObj = await this.fetch().catch(noop)

      if (!overwrite && docObj && docObj.exists())
        throw this.id + ' already exists in ' + this.collection + ' ...'

      if (presaveFn)
        presaveFn(docObj)

      await setDoc(this.ref, buildObject(this))
      return true
    } catch (error) {
      consoleWarn(error)
      return false
    }
  }

  /**
   * @param {Object.<String, any>} data
   * @returns {Promise<void>}
   */
  update (data) {
    return updateDoc(this.ref, data)
  }

  /**
   * @param {(snap: import('firebase/firestore').QuerySnapshot<import('firebase/firestore').DocumentData>) => void} callback
   */
  subscribeToData (callback) {
    return onSnapshot(
      // @ts-ignore
      this.ref,
      callback
    )
  }
}
