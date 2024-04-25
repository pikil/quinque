import { browser } from '$app/environment'

const blockScrollClasses = ['overflow-hidden', 'scroll-blocked']

export const sublinkClasses = 'p-1.5 text-sm border-b-2 transition-colors'

export const sublinkActiveClasses = sublinkClasses + ' text-white border-primary'

export const sublinkPassiveClasses = sublinkClasses + ' text-faded border-gray-700 hover:text-white hover:border-primary'

export const pageTitleClasses = 'pt-6 pb-2 text-xl font-bold'

export const pageParagraphClasses = 'py-2'

export const linkClasses = 'text-primary hover:underline'

// eslint-disable-next-line max-len
export const mainBtnClasses = 'text-2xl rounded-xl text-primary border-2 border-primary w-full max-w-72 hover:max-w-[19rem] py-5 transition-[max-width]'

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
