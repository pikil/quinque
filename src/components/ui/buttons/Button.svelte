{#if href}
  <a bind:this={btn} {href} {title} class={classes} {target}>
    <ButtonContent {icon} {iconRight} {iconClass} {label} {labelClass}>
      <slot />
    </ButtonContent>
  </a>
{:else}
  <button bind:this={btn} {type} {title} class={classes} {disabled} on:click>
    {#if loading}
      {#if typeof loading === 'string'}
        {loading}
      {/if}
      <div class="w-10">
        <PageLoader class={loaderClass} />
      </div>
    {:else}
      <ButtonContent {icon} {iconRight} {iconClass} {label} {labelClass}>
        <slot />
      </ButtonContent>
    {/if}
  </button>
{/if}
<script>
import ButtonContent from '$ui/buttons/ButtonContent.svelte'
import PageLoader from '$blocks/loaders/PageLoader.svelte'
import { page } from '$app/stores'

/**
 * @type {HTMLButtonElement|HTMLAnchorElement?}
 */
let btn = null

/**
 * @type {String|undefined}
 */
export let href = undefined

/**
 * @type {String|undefined}
 */
export let icon = undefined

/**
 * @type {String|undefined}
 */
export let iconRight = undefined

/**
 * @type {String|undefined}
 */
export let iconClass = 'w-4 h-4'

/**
 * @type {String|undefined}
 */
export let labelClass = undefined

/**
 * @type {String|undefined}
 */
export let title = undefined

/**
 * @type {Boolean}
 */
export let dense = false

/**
 * @type {'button'|'submit'|'reset'|undefined}
 */
export let type = 'button'

/**
 * @type {String|undefined}
 */
export let loaderClass = 'scale-50'

/**
 * @type {Boolean}
 */
export let disabled = false

/**
 * @type {Boolean|String}
 */
export let loading = false

/**
 * @type {String}
 */
export let label = ''

/**
 * @type {'_blank'|'_parent'|'_self'|'_top'|undefined}
 */
export let target = undefined

/**
 * @type {Boolean}
 */
export let rounded = true

/**
 * @type {String}
 */
export let activeClass = ''

/**
 * @type {String}
 */
export let inactiveClass = ''

$: isActive = href === $page.url.pathname
$: disabledClasses = (disabled || loading)
  ? ' opacity-70 cursor-not-allowed pointer-events-none'
  : ''
$: denseClasses = (dense ? '' : ((icon || iconRight && !label) ? ' p-2' : ' py-3 px-4' ))
$: externalClasses = ($$props.class) ? ' ' + $$props.class : ''
$: roundedClasses = (rounded ? ' rounded-full' : '')
$: classes = 'flex flex-row gap-x-2 items-center justify-center outline-hidden select-none transition-width'
  + disabledClasses
  + denseClasses
  + externalClasses
  + roundedClasses
  + (isActive ? ' ' + activeClass : ' ' + inactiveClass)
$: {
  if (btn) {
    if (loading) {
      btn.style.height = ((btn.clientHeight || 0) + 1).toString() + 'px'
      btn.style.minWidth = btn.clientWidth + 'px'
    } else {
      btn.style.height = ''
      btn.style.width = ''
      btn.style.minWidth = ''
    }
  }
}
</script>
