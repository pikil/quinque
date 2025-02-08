<div class={classes} {style}>
  <div class="transition-transform duration-500" style={transformClasses}>
    {#each { length: 2 } as _}
      {#each { length: 10 } as __, i}
        <div class={digitClass} {style}>{i}</div>
      {/each}
    {/each}
  </div>
</div>
<script>
const digitClass = 'flex flex-col justify-center items-center text-xl'

/**
 * @typedef {Object} Props
 * @property {Number} [digit]
 * @property {Number} [height]
 * @property {Number} [width]
 * @property {Number} [borderOffset]
 * @property {String} [class]
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
