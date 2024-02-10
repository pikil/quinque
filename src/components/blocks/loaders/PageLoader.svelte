<div class={classes}>
  <ListLoader {label} />
</div>
<script>
import ListLoader from '$blocks/loaders/ListLoader.svelte'

/**
 * @type {String}
 */
export let label = ''

$: classes = 'w-full h-full flex flex-col justify-center items-center'
  + ($$props.class ? ' ' + $$props.class : '')
</script>
