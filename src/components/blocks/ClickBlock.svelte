<div
  role="button"
  tabindex="0"
  class={classes}
  onclick={onClick}
  onmouseenter={onEnter}
  onmouseleave={onLeave}
  onkeypress={noop}
>
  {#if !selected}
    {#if isHovering}
      <Icon name={currentModeIcon} class="h-4 w-4 text-black" />
    {:else if selectCandidate}
      <Icon name={fasCircle} class={iconClasses} />
    {/if}
  {/if}
</div>
<script>
import { getModeIcon } from '$lib'
import { enteringMode } from '$stores/user-store'
import Icon from '$ui/Icon.svelte'
import { fasCircle } from '$vendor/icons/fontawesome6-icons'
import { tick } from 'svelte'
import { noop } from '$utils'

/**
 * @typedef {Object} Props
 * @property {Number[]?} [hoverCoords]
 * @property {Boolean?} [disabled]
 * @property {Number} rowIndex
 * @property {Number} colIndex
 * @property {String|false} [selected]
 * @property {String|false} [selectCandidate]
 * @property {String} [hoverColor]
 * @property {Function} [onclick]
 * @property {Function} [onenter]
 * @property {Function} [onleave]
 */

/** @type {Props} */
let {
  hoverCoords = null,
  disabled = false,
  rowIndex,
  colIndex,
  selected = false,
  selectCandidate = false,
  hoverColor = '',
  onclick,
  onenter,
  onleave
} = $props()

/**
 * @type {Boolean}
 */
let isAnimating = $state(false)

const animate = () => {
  isAnimating = true

  setTimeout(() => {
    isAnimating = false
  }, 600)
}

const onClick = async () => {
  if (onclick)
    onclick({ rowIndex, colIndex })
}

const onEnter = () => {
  if (onenter)
    onenter({ rowIndex, colIndex })
}

const onLeave = () => {
  if (onleave)
    onleave({ rowIndex, colIndex })
}

let iconClasses = $derived('h-3 w-3 opacity-50' + (selectCandidate === 'color1' ? ' text-color1' : ' text-color2'))
let bgClasses = $derived(selected === 'color1'
  ? ' bg-color1 sel-color1'
  : (selected === 'color2'
    ? ' bg-color2 sel-color2'
    : ' bg-gray-600'
  ))
let hoverClasses = $derived(selected
  ? ''
  : (hoverColor === 'color1'
    ? ' hover:bg-color1'
    : (hoverColor === 'color2'
      ? ' hover:bg-color2'
      : ' hover:bg-gray-400'
    )
  ))
let classes = $derived('flex-1 aspect-square text-sm transition-colors duration-300 rounded-xs sm:rounded-md border border-gray-600 bubbly relative'
  + ' cursor-pointer outline-hidden'
  + ' flex flex-col justify-center items-center'
  + ' bg-opacity-80 hover:bg-opacity-100'
  + hoverClasses
  + bgClasses
  + (selected || disabled ? ' pointer-events-none' : '' )
  + (isAnimating ? ' animate' : ''))
let currentModeIcon = $derived(getModeIcon($enteringMode))
let isHovering = $derived(hoverCoords && rowIndex === hoverCoords[0] && colIndex === hoverCoords[1])

$effect(() => {
  if (selected)
    tick().then(animate)
})
</script>
