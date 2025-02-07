<div
  role="button"
  tabindex="0"
  class={classes}
  on:click={onClick}
  on:mouseenter={onEnter}
  on:mouseleave={onLeave}
  on:keypress={noop}
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
import { createEventDispatcher, tick } from 'svelte'
import { noop } from 'svelte/internal'

const dispatch = createEventDispatcher()

/**
 * @type {Boolean}
 */
let isAnimating = false

/**
 * @type {Number[]?}
 */
export let hoverCoords = null

/**
 * @type {Boolean?}
 */
export let disabled = false

/**
 * @type {Number}
 */
export let rowIndex

/**
 * @type {Number}
 */
export let colIndex

/**
 * @type {String|false}
 */
export let selected = false

/**
 * @type {String|false}
 */
export let selectCandidate = false

/**
 * @type {String}
 */
export let hoverColor = ''

const animate = () => {
  isAnimating = true

  setTimeout(() => {
    isAnimating = false
  }, 600)
}

const onClick = async () => {
  dispatch('click', { rowIndex, colIndex })
}

const onEnter = () => {
  dispatch('enter', { rowIndex, colIndex })
}

const onLeave = () => {
  dispatch('leave', { rowIndex, colIndex })
}

$: iconClasses = 'h-3 w-3 opacity-50'
  + (selectCandidate === 'color1' ? ' text-color1' : ' text-color2')
$: bgClasses = selected === 'color1'
  ? ' bg-color1 sel-color1'
  : (selected === 'color2'
    ? ' bg-color2 sel-color2'
    : ' bg-gray-600'
  )
$: hoverClasses = selected
  ? ''
  : (hoverColor === 'color1'
    ? ' hover:bg-color1'
    : (hoverColor === 'color2'
      ? ' hover:bg-color2'
      : ' hover:bg-gray-400'
    )
  )
$: classes = 'flex-1 aspect-square text-sm transition-colors duration-300 rounded-xs sm:rounded-md border border-gray-600 bubbly relative'
  + ' cursor-pointer outline-hidden'
  + ' flex flex-col justify-center items-center'
  + ' bg-opacity-80 hover:bg-opacity-100'
  + hoverClasses
  + bgClasses
  + (selected || disabled ? ' pointer-events-none' : '' )
  + (isAnimating ? ' animate' : '')
$: currentModeIcon = getModeIcon($enteringMode)
$: isHovering = hoverCoords && rowIndex === hoverCoords[0] && colIndex === hoverCoords[1]
$: {
  if (selected)
    tick().then(animate)
}
</script>
