<div class={classes} {style}>
  <div class="transition-transform duration-500" style={transformClasses}>
    <!-- eslint-disable-next-line no-unused-vars -->
    {#each { length: 10 } as _, i}
      <div class={digitDefClass} {style}>{i}</div>
    {/each}
    <!-- eslint-disable-next-line no-unused-vars -->
    {#each { length: 10 } as _, i}
      <div class={digitDefClass} {style}>{i}</div>
    {/each}
  </div>
</div>
<script>
const digitDefClass = 'flex flex-col justify-center items-center text-xl'

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
export let width = 15

$: style = 'width: ' + width + 'px;height: ' + height + 'px'
$: classes = 'overflow-hidden'
  + ($$props.class ? ' ' + $$props.class : '')
$: transformClasses = 'transform: translateY(-' + (digit * height) + 'px)'
</script>
