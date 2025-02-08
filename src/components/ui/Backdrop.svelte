{#if showing}
  <div
    transition:fade|global={transitionParamsStandard}
    role="button"
    tabindex="0"
    class="fixed z-35 inset-0 backdrop-brightness-75 backdrop-blur-sm"
    {onclick}
    onkeypress={onclick}
></div>
{/if}
<script>
import { fade } from 'svelte/transition'
import { transitionParamsStandard } from '$data/objects'

/**
 * @typedef {Object} Props
 * @property {Boolean} [showing]
 * @property {(event: MouseEvent|KeyboardEvent) => void} [onclick]
 */

/** @type {Props} */
let {
  showing = false,
  onclick
} = $props()
</script>
