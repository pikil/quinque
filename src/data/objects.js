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

