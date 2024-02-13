const keyParameters = {
  name: 'ECDH',
  namedCurve: 'P-384'
}

const algo = 'AES-GCM'

/**
 * @param {ArrayBuffer} arrayBuffer
 * @returns {String}
 */
// @ts-ignore
const arrayBufferToBase64 = arrayBuffer => btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)))

/**
 * @param {String} base64
 * @returns {ArrayBuffer}
 */
const base64ToArrayBuffer = (base64) => {
  const binaryString = atob(base64)
  const bytes = new Uint8Array(binaryString.length)

  for (let i = 0; i < binaryString.length; i++)
    bytes[i] = binaryString.charCodeAt(i)

  return bytes.buffer
}

/**
* @param {String} jwkString
* @returns {Promise<CryptoKey>}
*/
const parseJwkPublicKey = (jwkString) => {
  const data = JSON.parse(jwkString)

  return crypto.subtle.importKey(
    'jwk',
    data,
    keyParameters,
    true,
    []
  )
}

class PeerCrypto {
  constructor () {
    this.pubKey = null
    this.prKey = null
    this.iv = crypto.getRandomValues(new Uint8Array(12))
    this.waitingForSharedSecret = new Promise((resolve) => {
      this.resolveShareSecret = resolve
    })
  }

  /**
   * @returns {Promise<void>}
   */
  init () {
    return new Promise((resolve) => {
      crypto.subtle.generateKey(keyParameters, true, ['deriveKey']).then(async (keys) => {
        this.pubKey = keys.publicKey
        this.prKey = keys.privateKey
        resolve()
      })
    })
  }

  /**
   * @param {CryptoKey} publicKey
   * @returns {Promise<CryptoKey?>}
   */
  async deriveSharedKey (publicKey) {
    if (!this.prKey)
      return null

    return crypto.subtle.deriveKey(
      {
        name: 'ECDH',
        public: publicKey
      },
      this.prKey,
      {
        name: algo,
        length: 256
      },
      true,
      ['encrypt', 'decrypt']
    )
  }

  /**
   * @returns {Promise<String>}
   */
  async exportPublicKeyToJwk () {
    if (!this.pubKey)
      return ''

    return JSON.stringify(await crypto.subtle.exportKey('jwk', this.pubKey))
  }

  /**
   * @param {String} keyString
   */
  async setSharedKeyFromJwkString (keyString) {
    this.shared = {
      key: await this.deriveSharedKey(await parseJwkPublicKey(keyString))
    }

    // @ts-ignore
    this.resolveShareSecret()
  }

  /**
   * @param {String} iv
   */
  setIvFromRemote (iv) {
    this.iv = new Uint8Array(base64ToArrayBuffer(iv))
  }

  /**
   * @param {String} data
   * @param {CryptoKey} [key]
   * @param {Uint8Array} [iv]
   */
  async ecnrypt (data, key, iv) {
    if (!key)
      key = this.shared?.key || undefined

    if (!key)
      throw 'The key is not generated...'

    return arrayBufferToBase64(await crypto.subtle.encrypt(
      {
        name: algo,
        iv: iv || this.iv
      },
      key,
      (new TextEncoder()).encode(data)
    ))
  }

  /**
   * @param {String} base64
   * @param {CryptoKey} [key]
   * @param {Uint8Array} [iv]
   */
  async decrypt (base64, key, iv) {
    if (!key)
      key = this.shared?.key || undefined

    if (!key)
      throw 'Key is not provided...'

    return (new TextDecoder()).decode(await crypto.subtle.decrypt(
      {
        name: algo,
        iv: iv || this.iv
      },
      key,
      base64ToArrayBuffer(base64)
    ))
  }

  ivString () {
    return arrayBufferToBase64(this.iv)
  }
}

export default new PeerCrypto()
