import { writable } from 'svelte/store'

/**
 * @type {import('svelte/store').Writable<boolean>}
 */
export const mounting = writable(true)

/**
 * @type {import('svelte/store').Writable<string?>}
 */
export const headerTitle = writable(null)

/**
 * @type {import('svelte/store').Writable<string?>}
 */
export const headerHref = writable(null)
