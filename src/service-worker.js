import { build, files, version } from '$service-worker'

const cacheName = `cache${version}`

const toCache = build.concat(files)
const staticAssets = new Set(toCache)

self.addEventListener('install', (event) => {
  // @ts-ignore
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => cache.addAll(toCache)).catch(() => {}) // For now, this is not working properly..
      // @ts-ignore
      .then(self.skipWaiting)
  )
})

self.addEventListener('activate', (event) => {
  // @ts-ignore
  event.waitUntil(
    caches.keys().then(async (keys) => {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]

        if (key !== cacheName)
          await caches.delete(key)
      }

      // @ts-ignore
      self.clients.claim()
    })
  )
})

/**
 * @param {Object.<String, any>} request
 * @returns {Promise<Response>}
 */
const fetchAndCache = async (request) => {
  const cache = await caches.open(cacheName)

  try {
    const response = await fetch(request)
    cache.put(request, response.clone())

    return response
  } catch (err) {
    const response = await cache.match(request)

    if (response)
      return response

    throw err
  }
}

self.addEventListener('fetch', (/** @type {Object.<String, any>} */ event) => {
  if (event.request.method !== 'GET' || event.request.headers.has('range'))
    return

  const url = new URL(event.request.url)

  const isHttp = url.protocol.startsWith('http')
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname)
  const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset

  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith(
      (async () => {
        const cachedAsset = isStaticAsset && (await caches.match(event.request))
        return cachedAsset || fetchAndCache(event.request)
      })()
    )
  }
})
