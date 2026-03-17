import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const STORAGE_KEY = 'quinque-preferences'

const defaultPreferences = {
  colorblindMode: false,
  reducedMotion: false,
  hapticFeedback: true,
  soundEnabled: false
}

/**
 * @param {string} key
 * @param {any} defaultValue
 */
const createPersistedStore = (key, defaultValue) => {
  const getStoredValue = () => {
    if (!browser) return defaultValue
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : defaultValue
    } catch {
      return defaultValue
    }
  }

  const store = writable(getStoredValue())

  if (browser) {
    store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value))
    })
  }

  return store
}

/**
 * User accessibility and UI preferences
 * @type {import('svelte/store').Writable<Preferences>}
 */
export const preferences = createPersistedStore(STORAGE_KEY, defaultPreferences)

/**
 * @typedef {Object} Preferences
 * @property {boolean} colorblindMode - Enable patterns/icons in addition to colors
 * @property {boolean} reducedMotion - Reduce animations for accessibility
 * @property {boolean} hapticFeedback - Enable haptic feedback on mobile
 * @property {boolean} soundEnabled - Enable sound effects
 */
