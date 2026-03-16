import { noop } from '$utils'
import { writable } from 'svelte/store'

/**
 * @type {import('svelte/store').Writable<ConfirmData>}
 */
export const confirmData = writable({
  text: '',
  ok: noop,
  okLabel: 'OK',
  dismissLabel: 'Cancel',
  dismiss: noop
})
