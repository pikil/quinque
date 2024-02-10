import { browser } from '$app/environment'

/**
 * @type {String?}
 */
let ua = null

const setUa = () => {
  if (browser && !ua)
    // @ts-ignore
    ua = (window.navigator.userAgent || window.navigator.vendor || window.opera || '').toLowerCase()
}

/**
 * @type {Object.<String, any>}
 */
const cache = {}

/**
 * @param {String} key
 * @param {Function} getterFn
 * @returns {any}
 */
const getCachedValue = (key, getterFn) => {
  if (cache[key] === undefined)
    cache[key] = getterFn()

  return cache[key]
}

export default {
  ua: null,
  is: {
    get webMobile () {
      if (ua === null)
        setUa()

      return getCachedValue('webmob', () => /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|kindle|silk|mobile/i.test(ua || ''))
    },
    get webDesktop () {
      if (ua === null)
        setUa()

      return getCachedValue('!webmob', () => !cache.wm)
    },
    get touchAllowed () {
      return getCachedValue('touch', () => browser && 'ontouchstart' in window)
    },
    get mouseAllowed () {
      return getCachedValue('mouse', () => browser && matchMedia('(pointer:fine)').matches)
    }
  }
}
