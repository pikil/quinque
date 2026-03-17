<div
  role="button"
  tabindex="0"
  class={classes}
  onclick={onClick}
  onmouseenter={onEnter}
  onmouseleave={onLeave}
  onkeypress={onKeyPress}
  aria-label={ariaLabel}
  aria-pressed={selected !== false}
>
  {#if selected === 'color1'}
    {#if $preferences.colorblindMode}
      <div class="pattern-color1" aria-hidden="true"></div>
    {/if}
  {:else if selected === 'color2'}
    {#if $preferences.colorblindMode}
      <div class="pattern-color2" aria-hidden="true"></div>
    {/if}
  {:else}
    {#if isHovering}
      <Icon name={currentModeIcon} class="h-4 w-4 text-black" />
    {:else if selectCandidate}
      {#if $preferences.colorblindMode}
        <Icon 
          name={selectCandidate === 'color1' ? fasCircle : fasCircleNotch} 
          class={iconClasses} 
        />
      {:else}
        <Icon name={fasCircle} class={iconClasses} />
      {/if}
    {/if}
  {/if}
</div>
<script>
import { getModeIcon } from '$lib'
import { enteringMode } from '$stores/user-store'
import { preferences } from '$stores/preferences-store'
import Icon from '$ui/Icon.svelte'
import { fasCircle, fasCircleNotch } from '$vendor/icons/fontawesome6-icons'
import { tick } from 'svelte'
import { noop } from '$utils'
import { browser } from '$app/environment'

/**
 * @typedef {Object} Props
 * @property {number[]?} [hoverCoords]
 * @property {boolean?} [disabled]
 * @property {number} rowIndex
 * @property {number} colIndex
 * @property {string|false} [selected]
 * @property {string|false} [selectCandidate]
 * @property {string} [hoverColor]
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
 * @type {boolean}
 */
let isAnimating = $state(false)

const animate = () => {
  isAnimating = true

  setTimeout(() => {
    isAnimating = false
  }, 600)
}

const onClick = async () => {
  if (onclick) {
    onclick({ rowIndex, colIndex })
    // Haptic feedback on mobile
    if (browser && $preferences.hapticFeedback && navigator.vibrate) {
      navigator.vibrate(10)
    }
  }
}

const onEnter = () => {
  if (onenter)
    onenter({ rowIndex, colIndex })
}

const onLeave = () => {
  if (onleave)
    onleave({ rowIndex, colIndex })
}

const onKeyPress = (/** @type {KeyboardEvent} */ event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    onClick()
  }
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
let ariaLabel = $derived(`Grid cell row ${rowIndex + 1} column ${colIndex + 1}${selected ? ` selected ${selected}` : ''}`)

$effect(() => {
  if (selected)
    tick().then(animate)
})
</script>
<style>
  .pattern-color1 {
    position: absolute;
    inset: 4px;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 4px,
      rgba(0, 0, 0, 0.3) 4px,
      rgba(0, 0, 0, 0.3) 8px
    );
    border-radius: inherit;
    pointer-events: none;
  }

  .pattern-color2 {
    position: absolute;
    inset: 4px;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 4px,
      rgba(0, 0, 0, 0.3) 4px,
      rgba(0, 0, 0, 0.3) 8px
    );
    border-radius: inherit;
    pointer-events: none;
  }
</style>
