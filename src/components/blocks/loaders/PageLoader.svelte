<div class={classes}>
  <ListLoader {label} />
</div>
<script>
import ListLoader from '$blocks/loaders/ListLoader.svelte'

/**
 * @typedef {Object} Props
 * @property {String} [label]
 * @property {String} [class]
 */

/** @type {Props} */
let {
  label = '',
  class: klass
} = $props()

let classes = $derived('w-full h-full flex flex-col justify-center items-center'
  + (klass ? ' ' + klass : '')
)
</script>
