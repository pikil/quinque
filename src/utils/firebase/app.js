import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import errors from './errors'

/**
 * @type {import('@firebase/app').FirebaseApp?}
 */
let _app = null

/**
 * @type {import('firebase/firestore').Firestore?}
 */
let _db = null

export const getApp = () => {
  if (!_app) {
    const projectId = import.meta.env.VITE_FB_PROJECT_ID

    _app = initializeApp({
      apiKey: import.meta.env.VITE_FB_API_KEY,
      authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
      projectId,
      // databaseURL: 'https://' + projectId + '.firebaseio.com',
      storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FB_SENDER_ID,
      appId: import.meta.env.VITE_FB_APP_ID
    })
  }

  return _app
}

export const getDb = () => {
  if (!_db)
    _db = getFirestore(getApp())

  return _db
}

/**
 * @param {import('@firebase/app').FirebaseError} error
 * @param {String} fallbackMessage
 * @returns {String}
 */
export const decodeFirebaseError = ({ code }, fallbackMessage = 'Service error..') => (errors[code]) ? errors[code] : fallbackMessage
