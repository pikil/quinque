const keyParameters = {
  name: 'ECDH',
  namedCurve: 'P-384'
}

const algo = 'AES-GCM'
const ivLength = 12

/**
 * @param {ArrayBuffer} arrayBuffer
 * @returns {string}
 */
// @ts-ignore
const arrayBufferToBase64 = arrayBuffer => btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)))

/**
 * @param {string} base64
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
* @param {string} jwkString
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
    /**
     * @type {CryptoKey?}
     */
    this.pubKey = null

    /**
     * @type {CryptoKey?}
     */
    this.prKey = null

    /**
     * @type {{ key: CryptoKey? }?}
     */
    this.shared = null
  }

  /**
   * @returns {Promise<void>}
   */
  async init () {
    this.shared = null
    this.waitingForSharedSecret = new Promise((resolve) => {
      this.resolveShareSecret = resolve
    })

    const keys = await crypto.subtle.generateKey(keyParameters, true, ['deriveKey'])
    this.pubKey = keys.publicKey
    this.prKey = keys.privateKey
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
   * @returns {Promise<string>}
   */
  async exportPublicKeyToJwk () {
    if (!this.pubKey)
      return ''

    return JSON.stringify(await crypto.subtle.exportKey('jwk', this.pubKey))
  }

  /**
   * @param {string} keyString
   */
  async setSharedKeyFromJwkString (keyString) {
    this.shared = {
      key: await this.deriveSharedKey(await parseJwkPublicKey(keyString))
    }

    // @ts-ignore
    this.resolveShareSecret()
  }

  /**
   * @param {string} data
   * @param {CryptoKey} [key]
   * @returns {Promise<string>} Base64 of the IV followed by the ciphertext
   */
  async encrypt (data, key) {
    if (!key)
      key = this.shared?.key || undefined

    if (!key)
      throw new Error('The key is not generated...')

    // GCM must never reuse an IV under the same key
    const iv = crypto.getRandomValues(new Uint8Array(ivLength))
    const ciphertext = new Uint8Array(await crypto.subtle.encrypt(
      { name: algo, iv },
      key,
      (new TextEncoder()).encode(data)
    ))

    const payload = new Uint8Array(ivLength + ciphertext.length)
    payload.set(iv)
    payload.set(ciphertext, ivLength)

    return arrayBufferToBase64(payload.buffer)
  }

  /**
   * @param {string} base64 Output of `encrypt`
   * @param {CryptoKey} [key]
   */
  async decrypt (base64, key) {
    if (!key)
      key = this.shared?.key || undefined

    if (!key)
      throw new Error('Key is not provided...')

    const payload = new Uint8Array(base64ToArrayBuffer(base64))

    return (new TextDecoder()).decode(await crypto.subtle.decrypt(
      { name: algo, iv: payload.subarray(0, ivLength) },
      key,
      payload.subarray(ivLength)
    ))
  }
}

export default new PeerCrypto()
