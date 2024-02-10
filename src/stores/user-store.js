import { enterModes } from '$data/objects'
import { writable } from 'svelte/store'

/**
 * The current mode
 * @type {import('svelte/store').Writable<Number>}
 */
export const enteringMode = writable(enterModes.SINGLE)

/**
 * Next after enteringMode
 * @type {import('svelte/store').Writable<Number>}
 */
export const enteringMode1 = writable(enterModes.SINGLE)

/**
 * Next after enteringMode1
 * @type {import('svelte/store').Writable<Number>}
 */
export const enteringMode2 = writable(enterModes.SINGLE)
