import { confirmData } from "$stores/system-store"
import { noop } from "svelte/internal"

const unsetConfirmData = () => {
  confirmData.set({ text: '', ok: noop, dismiss: noop })
}

/**
 * @param {String} text
 * @returns {Promise<Boolean>}
 */
export const popupConfirm = text => new Promise((resolve) => {
  confirmData.set({
    text,
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
