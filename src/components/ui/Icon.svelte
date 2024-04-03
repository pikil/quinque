<svg {viewBox} class={iconClasses}>
  {#each paths as [d, style, transform]}
    <path d={d} style={style} transform={transform} />
  {/each}
</svg>

<script>
const defViewbox = '0 0 24 24'

/**
 * @type {String}
 */
export let name

$: [def, box] = name.split('|')
$: viewBox = box || defViewbox
$: paths = def.split('&&').map(path => path.split('@@'))
$: iconClasses = 'fill-current inline'
  + ($$props.class ? ' ' + $$props.class : '')
</script>
