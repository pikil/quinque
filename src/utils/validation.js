import { confirmData } from "$stores/system-store"
import { noop } from "svelte/internal"

const unsetConfirmData = () => {
  confirmData.set({ text: '', ok: noop, dismiss: noop })
}

/**
 * @param {String} text
 * @param {String} okLabel
 * @param {String} dismissLabel
 * @returns {Promise<Boolean>}
 */
export const popupConfirm = (text, okLabel = 'OK', dismissLabel = 'Cancel') => new Promise((resolve) => {
  confirmData.set({
    text,
    okLabel,
    dismissLabel,
    ok: () => {
      unsetConfirmData()
      resolve(true)
    },
    dismiss: () => {
      unsetConfirmData()
      resolve(false)
    }
  })
})

/**
 * @param {any} str
 * @returns {Boolean}
 */
export const isString = str => typeof str === 'string'

/**
 * @param {any} str
 * @param {Number} [minLen]
 * @returns {Boolean}
 */
export const stringHasContent = (str, minLen) => isString(str) && ((!minLen && str !== '') || (!!minLen && str.length >= minLen))
