import { browser } from '$app/environment'

const blockScrollClasses = ['overflow-hidden', 'scroll-blocked']

export const blockGlobalScroll = () => {
  if (browser) {
    document.body.classList.add(...blockScrollClasses)
    document.documentElement.classList.add('overflow-hidden')
  }
}

export const unblockGlobalScroll = () => {
  if (browser) {
    document.body.classList.remove(...blockScrollClasses)
    document.documentElement.classList.remove('overflow-hidden')
  }
}

/**
 * @type {Object.<String, HTMLElement>}
 */
const portalCache = {}

/**
 * @param {String} id
 * @returns {HTMLElement}
 */
const getPortalElement = (id) => {
  if (!portalCache[id])
    portalCache[id] = document.getElementById(id)

  return portalCache[id]
}

/**
 * @param {HTMLElement} node
 * @param {String} id
 */
export const portal = (node, id = 'modal') => {
  const portalContainer = getPortalElement(id)

  if (!portalContainer)
    return

  portalContainer.appendChild(node)
  portalContainer.focus()
}
