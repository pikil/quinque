<div class={classes} {style}>
  <div class="transition-transform duration-500" style={transformClasses}>
    <!-- eslint-disable-next-line no-unused-vars -->
    {#each { length: 2 } as _}
      <!-- eslint-disable-next-line no-unused-vars -->
      {#each { length: 10 } as __, i}
        <div class={digitClass} {style}>{i}</div>
      {/each}
    {/each}
  </div>
</div>
<script>
const digitClass = 'flex flex-col justify-center items-center text-xl'

/**
 * @type {Number}
 */
export let digit = 0

/**
 * @type {Number}
 */
export let height = 30

/**
 * @type {Number}
 */
export let width = 28

/**
 * @type {Number}
 */
export let borderOffset = 0

$: style = 'width: ' + (width + borderOffset) + 'px;height: ' + (height + borderOffset) + 'px'
$: classes = 'overflow-hidden'
  + ($$props.class ? ' ' + $$props.class : '')
$: transformClasses = 'transform: translateY(-' + (digit * (height + borderOffset)) + 'px)'
</script>
