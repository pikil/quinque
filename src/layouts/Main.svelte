<main class="w-full max-w-150 mx-auto flex-1">
  {@render children?.()}
</main>
<script>
/**
 * @typedef {Object} Props
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let {
  children
} = $props()
</script>
