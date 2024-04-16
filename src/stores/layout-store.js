import { writable } from 'svelte/store'

/**
 * @type {import('svelte/store').Writable<Boolean>}
 */
export const mounting = writable(true)

/**
 * @type {import('svelte/store').Writable<String?>}
 */
export const headerTitle = writable(null)

/**
 * @type {import('svelte/store').Writable<String?>}
 */
export const headerHref = writable(null)
