export const navigatorCopyAvailable = () => !!navigator?.clipboard

/**
 * @param {string} text
 * @returns {boolean}
 */
export const copyToClipboard = (text) => {
  if (!navigatorCopyAvailable())
    return false

  navigator.clipboard.writeText(text)
  return true
}
