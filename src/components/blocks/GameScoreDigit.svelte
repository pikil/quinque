<div class={classes} {style}>
  <div class="transition-transform duration-500" style={transformClasses}>
    <!-- eslint-disable-next-line no-unused-vars -->
    {#each { length: 2 } as _, i (i)}
      <!-- eslint-disable-next-line no-unused-vars -->
      {#each { length: 10 } as __, j (j)}
        <div class={digitClass} {style}>{j}</div>
      {/each}
    {/each}
  </div>
</div>
<script>
const digitClass = 'flex flex-col justify-center items-center text-xl'

/**
 * @typedef {Object} Props
 * @property {number} [digit]
 * @property {number} [height]
 * @property {number} [width]
 * @property {number} [borderOffset]
 * @property {string} [class]
 */

/** @type {Props} */
let {
  digit = 0,
  height = 30,
  width = 26,
  borderOffset = 0,
  class: klass
} = $props()

let style = $derived('width: ' + (width + borderOffset) + 'px;height: ' + (height + borderOffset) + 'px')
let classes = $derived('overflow-hidden' + (klass ? ' ' + klass : ''))
let transformClasses = $derived('transform: translateY(-' + (digit * (height + borderOffset)) + 'px)')
</script>
