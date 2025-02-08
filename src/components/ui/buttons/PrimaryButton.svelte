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
  {onclick}
>
  {@render children?.()}
</Button>
<script>
import Button from '$ui/buttons/Button.svelte'
import { noop } from '$utils'

/**
 * @typedef {Object} Props
 * @property {String} [href]
 * @property {String} [icon]
 * @property {String} [iconRight]
 * @property {String} [iconClass]
 * @property {String} [title]
 * @property {Boolean} [dense]
 * @property {'button'|'submit'|'reset'} [type]
 * @property {Boolean} [disabled]
 * @property {Boolean|String} [loading]
 * @property {String} [label]
 * @property {'_blank'|'_parent'|'_self'|'_top'} [target]
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
  title,
  dense = false,
  type = 'button',
  disabled = false,
  loading = false,
  label = '',
  target,
  activeClass = '',
  inactiveClass = '',
  class: klass,
  onclick = noop,
  children
} = $props()

let classes = $derived('bg-primary text-white' + (klass ? ' ' + klass : ''))
</script>
