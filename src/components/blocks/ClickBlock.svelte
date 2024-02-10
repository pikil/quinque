<div
  role="button"
  tabindex="0"
  class={classes}
  on:pointerdown={onClick}
  on:mouseenter={onEnter}
  on:mouseleave={onLeave}
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
  + (selectCandidate === 'color1' ? ' text-indigo-400' : ' text-rose-400')
$: bgClasses = selected === 'color1'
  ? ' bg-indigo-400 sel-color1'
  : (selected === 'color2'
    ? ' bg-pink-400 sel-color2'
    : ' bg-gray-600'
  )
$: hoverClasses = selected
  ? ''
  : (hoverColor === 'color1'
    ? ' hover:bg-indigo-400'
    : (hoverColor === 'color2'
      ? ' hover:bg-rose-400'
      : ' hover:bg-gray-400'
    )
  )
$: classes = 'flex-1 aspect-square text-sm transition-colors duration-300 rounded-md border border-gray-600 bubbly relative'
  + ' cursor-pointer outline-none'
  + ' grid place-items-center'
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
