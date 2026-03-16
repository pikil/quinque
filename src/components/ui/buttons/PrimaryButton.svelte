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
 * @property {string} [href]
 * @property {string} [icon]
 * @property {string} [iconRight]
 * @property {string} [iconClass]
 * @property {string} [title]
 * @property {boolean} [dense]
 * @property {'button'|'submit'|'reset'} [type]
 * @property {boolean} [disabled]
 * @property {boolean|string} [loading]
 * @property {string} [label]
 * @property {'_blank'|'_parent'|'_self'|'_top'} [target]
 * @property {string} [activeClass]
 * @property {string} [inactiveClass]
 * @property {string} [class]
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
