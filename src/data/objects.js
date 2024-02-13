import { quintInOut } from 'svelte/easing'

export const enterModes = {
  SINGLE: 0,
  AXES: 1,
  DIAGONAL: 2,
  HORIZONTAL: 3,
  VERTICAL: 4,
  RISING: 5,
  FALLING: 6
}

export const transitionParamsStandard = {
  duration: 200,
  easing: quintInOut
}

export const playModes = {
  AI: 0,
  FRIEND_LOCAL: 1,
  FRIEND_ONLINE: 2
}

export const rtcTypes = {
  ANSWER: 'answer',
  OFFER: 'offer'
}

export const peerStatuses = {
  CONNECTING: 0,
  CONNECTED_AS_PLAYER1: 1,
  CONNECTED_AS_PLAYER2: 2,
  DISCONNECTED: 3
}
