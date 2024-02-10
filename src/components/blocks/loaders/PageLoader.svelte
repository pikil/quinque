<div class={classes}>
  <ListLoader {label} />
</div>
<script>
import ListLoader from '$blocks/loaders/ListLoader.svelte'

/**
 * @type {String}
 */
export let label = ''

$: classes = 'w-full h-full grid place-items-center'
  + ($$props.class ? ' ' + $$props.class : '')
</script>
