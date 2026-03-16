<svg {viewBox} class={iconClasses}>
  {#each paths as [d, style, transform]}
    <path d={d} style={style} transform={transform} />
  {/each}
</svg>
<script>
const defViewbox = '0 0 24 24'

/**
 * @typedef {Object} Props
 * @property {string} name
 * @property {string} class
 */

/** @type {Props} */
let {
  name,
  class: klass
} = $props()

let [def, box] = $derived(name.split('|'))
let viewBox = $derived(box || defViewbox)
let paths = $derived(def.split('&&').map((/** @type {string} */ path) => path.split('@@')))
let iconClasses = $derived('fill-current inline' + (klass ? ' ' + klass : ''))
</script>
