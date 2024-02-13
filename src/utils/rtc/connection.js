const config = {
  iceServers: [
    { urls: 'stun:stun.services.mozilla.com' },
    { urls: 'stun:stun.l.google.com:19302' }
  ]
}

class PeerConnection {
  constructor () {
    /**
     * @type {Function?}
     */
    this.onicecandidate = null

    /**
     * @type {Function?}
     */
    this.onstatechange = null

    /**
     * @type {Function?}
     */
    this.onmessage = null

    /**
     * @type {RTCDataChannel?}
     */
    this.dataChannel = null

    this.remoteDescriptionApplied = new Promise((resolve) => {
      this.applyRemoteDescription = resolve
    })
  }

  init () {
    const self = this
    this.connection = new RTCPeerConnection(config)

    /**
     * @param {RTCPeerConnectionIceEvent} evt
     */
    this.connection.onicecandidate = (evt) => {
      if (self.onicecandidate)
        self.onicecandidate(evt)
    }

    this.connection.onconnectionstatechange = (evt) => {
      if (self.onstatechange)
        self.onstatechange(evt)
    }

    this.connection.ondatachannel = (evt) => {
      const { channel } = evt

      if (!channel)
        return

      channel.onopen = () => {
        // Nothing for now
      }

      channel.onclose = () => {
        // Nothing for now
      }

      channel.onmessage = (evt) => {
        if (this.onmessage)
          this.onmessage(evt)
      }

      this.dataChannel = channel
    }
  }

  close () {
    this.connection?.close()
  }

  /**
   * @param {String} name
   */
  createDatachannel (name = 'default') {
    this.dataChannel = this.connection?.createDataChannel(name) || null

    if (!this.dataChannel)
      return

    this.dataChannel.onopen = () => {
      // Nothing for now
    }
    this.dataChannel.onclose = () => {
      // Nothing for now
    }
    this.dataChannel.onmessage = (evt) => {
      if (this.onmessage)
        this.onmessage(evt)
    }
  }

  localDescription () {
    return this.connection?.localDescription?.sdp || ''
  }

  createOffer () {
    return this.connection?.createOffer()
  }

  createAnswer () {
    return this.connection?.createAnswer()
  }

  /**
   * @param {Object.<'type'|'sdp', String>} d
   * @returns {Promise<void>}
   */
  async setRemoteDescription (d) {
    await this.connection?.setRemoteDescription(d)
    // @ts-ignore
    this.applyRemoteDescription()
  }

  /**
   * @param {Object.<'type'|'sdp', String>} d
   * @returns {Promise<void>|undefined}
   */
  setLocalDescription (d) {
    return this.connection?.setLocalDescription(d)
  }

  /**
   * @param {Object} c
   * @returns {Promise<void>|undefined}
   */
  addIceCandidate (c) {
    return this.connection?.addIceCandidate(c)
  }

  /**
   * @param {String} string
   * @returns {void}
   */
  sendChannelMessage (string) {
    if (!this.dataChannel || this.dataChannel.readyState !== 'open') {
      this.connection?.close()
      return
    }

    this.dataChannel.send(string)
  }
}

export default new PeerConnection()
