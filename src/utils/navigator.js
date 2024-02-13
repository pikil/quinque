import { browser } from '$app/environment'

export const navigatorCopyAvailable = () => browser && !!navigator?.clipboard

/**
 * @param {String} text
 * @returns {Boolean}
 */
export const copyToClipboard = (text) => {
  if (!navigatorCopyAvailable())
    return false

  navigator.clipboard.writeText(text)
  return true
}
