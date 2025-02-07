{#if showing}
  <div
    use:portal={'backdrop'}
    transition:fade|global={transitionParamsStandard}
    role="button"
    tabindex="0"
    class="fixed z-35 inset-0 backdrop-brightness-75 backdrop-blur-sm"
    on:click
    on:keypress
  />
{/if}
<script>
import { fade } from 'svelte/transition'
import { portal } from '$utils/dom'
import { transitionParamsStandard } from '$data/objects'

export let showing = false
</script>
