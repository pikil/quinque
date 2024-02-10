{#if icon}
  <Icon name={icon} class={iconClass} />
{/if}
{#if label}
  <div class={labelClasses}>{label}</div>
{/if}
{#if iconRight}
  <Icon name={iconRight} class={iconClass} />
{/if}
<slot />
<script>
import Icon from '$ui/Icon.svelte'

/**
 * @type {String}
 */
export let label = ''

/**
 * @type {String}
 */
export let iconClass = 'w-4 h-4'

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
export let labelClass = ''

$: labelClasses = 'ellipsis'
  + (labelClass ? ' ' + labelClass : '')
</script>
