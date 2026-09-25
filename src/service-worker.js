/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
import { base, build, files, version } from '$service-worker'

const sw = /** @type {ServiceWorkerGlobalScope} */ (/** @type {unknown} */ (self))

const cacheName = `cache${version}`

// Every route is rendered client-side from the same fallback page, so one cached copy serves them all offline
const appShell = `${base}/`

const staticAssets = new Set([...build, ...files])

sw.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll([...staticAssets, appShell]))
  )
})

sw.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== cacheName).map(key => caches.delete(key))
    ))
  )
})

/**
 * @param {Request} request
 * @param {URL} url
 * @returns {Promise<Response>}
 */
const respond = async (request, url) => {
  const cache = await caches.open(cacheName)

  if (staticAssets.has(url.pathname)) {
    const cached = await cache.match(url.pathname)

    if (cached)
      return cached
  }

  const isNavigation = request.mode === 'navigate'

  try {
    const response = await fetch(request)

    if (response.status === 200 && !isNavigation)
      cache.put(request, response.clone())

    return response
  } catch (err) {
    const cached = await cache.match(isNavigation ? appShell : request)

    if (cached)
      return cached

    throw err
  }
}

sw.addEventListener('fetch', (event) => {
  const { request } = event

  if (request.method !== 'GET' || request.headers.has('range'))
    return

  const url = new URL(request.url)

  // Firebase keeps long-lived streaming GETs open; caching those would never complete
  if (url.origin !== sw.location.origin)
    return

  event.respondWith(respond(request, url))
})
