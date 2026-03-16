import { confirmData } from '$stores/system-store'
import { noop } from '$utils'

const unsetConfirmData = () => {
  confirmData.set({ text: '', ok: noop, dismiss: noop })
}

/**
 * @param {string} text
 * @param {string} okLabel
 * @param {string} dismissLabel
 * @returns {Promise<boolean>}
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
 * @returns {boolean}
 */
export const isString = str => typeof str === 'string'

/**
 * @param {any} str
 * @param {number} [minLen]
 * @returns {boolean}
 */
export const stringHasContent = (str, minLen) => isString(str) && ((!minLen && str !== '') || (!!minLen && str.length >= minLen))
