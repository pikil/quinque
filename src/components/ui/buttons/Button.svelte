{#if href}
  <a bind:this={btn} {href} {title} class={classes} {target}>
    <ButtonContent {icon} {iconRight} {iconClass} {label} {labelClass}>
      {@render children?.()}
    </ButtonContent>
  </a>
{:else}
  <button bind:this={btn} {type} {title} class={classes} {disabled} {onclick}>
    {#if loading}
      {#if typeof loading === 'string'}
        {loading}
      {/if}
      <div class="w-10">
        <PageLoader class={loaderClass} />
      </div>
    {:else}
      <ButtonContent {icon} {iconRight} {iconClass} {label} {labelClass}>
        {@render children?.()}
      </ButtonContent>
    {/if}
  </button>
{/if}
<script>
import ButtonContent from '$ui/buttons/ButtonContent.svelte'
import PageLoader from '$blocks/loaders/PageLoader.svelte'
import { page } from '$app/state'
import { noop } from '$utils'

/**
 * @typedef {Object} Props
 * @property {String} [href]
 * @property {String} [icon]
 * @property {String} [iconRight]
 * @property {String} [iconClass]
 * @property {String} [labelClass]
 * @property {String} [title]
 * @property {Boolean} [dense]
 * @property {'button'|'submit'|'reset'} [type]
 * @property {String} [loaderClass]
 * @property {Boolean} [disabled]
 * @property {Boolean|String} [loading]
 * @property {String} [label]
 * @property {'_blank'|'_parent'|'_self'|'_top'} [target]
 * @property {Boolean} [rounded]
 * @property {String} [activeClass]
 * @property {String} [inactiveClass]
 * @property {String} [class]
 * @property {(event: MouseEvent) => void} [onclick]
 * @property {import('svelte').Snippet<[]>} [children]
 */

/** @type {Props} */
let {
  href,
  icon,
  iconRight,
  iconClass = 'w-4 h-4',
  labelClass,
  title,
  dense = false,
  type = 'button',
  loaderClass = 'scale-50',
  disabled = false,
  loading = false,
  label = '',
  target,
  rounded = true,
  activeClass = '',
  inactiveClass = '',
  class: klass,
  onclick = noop,
  children
} = $props()

/**
 * @type {HTMLButtonElement|HTMLAnchorElement?}
 */
let btn = $state(null)

let isActive = $derived(href === page.url.pathname)
let disabledClasses = $derived((disabled || loading)
  ? ' opacity-70 cursor-not-allowed pointer-events-none'
  : ''
)
let denseClasses = $derived((dense ? '' : ((icon || iconRight && !label) ? ' p-2' : ' py-3 px-4' )))
let externalClasses = $derived((klass) ? ' ' + klass : '')
let roundedClasses = $derived((rounded ? ' rounded-full' : ''))
let classes = $derived('flex flex-row gap-x-2 items-center justify-center outline-hidden select-none transition-width cursor-pointer'
  + disabledClasses
  + denseClasses
  + externalClasses
  + roundedClasses
  + (isActive ? ' ' + activeClass : ' ' + inactiveClass)
)

$effect(() => {
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
})
</script>
