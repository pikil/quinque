{#if icon}
  <Icon name={icon} class={iconClass} />
{/if}
{#if label}
  <div class={labelClasses}>{label}</div>
{/if}
{@render children?.()}
{#if iconRight}
  <Icon name={iconRight} class={iconClass} />
{/if}
<script>
import Icon from '$ui/Icon.svelte'

/**
 * @typedef {Object} Props
 * @property {string} [label]
 * @property {string} [iconClass]
 * @property {string} [icon]
 * @property {string} [iconRight]
 * @property {string} [labelClass]
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let {
  label = '',
  iconClass = 'w-4 h-4',
  icon,
  iconRight,
  labelClass = '',
  children
} = $props()

let labelClasses = $derived('ellipsis' + (labelClass ? ' ' + labelClass : ''))
</script>
