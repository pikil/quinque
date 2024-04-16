<Button
  class={classes}
  {type}
  {label}
  {href}
  {title}
  {icon}
  {iconClass}
  {iconRight}
  {dense}
  {disabled}
  {loading}
  {target}
  {activeClass}
  {inactiveClass}
  on:click
>
  <slot />
</Button>
<script>
import Button from '$ui/buttons/Button.svelte'

/**
 * @type {'reset'|'submit'|'button'|undefined}
 */
export let type = undefined

/**
 * @type {String|undefined}
 */
export let label = undefined

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
export let iconClass = undefined

/**
 * @type {Boolean|undefined}
 */
export let dense = undefined

/**
 * @type {Boolean|undefined}
 */
export let disabled = undefined

/**
 * @type {Boolean|String|undefined}
 */
export let loading = undefined

/**
 * @type {String|undefined}
 */
export let title = undefined

/**
 * @type {'_blank'|'_parent'|'_self'|'_top'|undefined}
 */
export let target = undefined

/**
 * @type {String|undefined}
 */
 export let activeClass = undefined

/**
 * @type {String|undefined}
 */
export let inactiveClass = undefined

$: classes = 'bg-primary text-white'
  + ($$props.class ? ' ' + $$props.class : '')
</script>
