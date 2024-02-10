<svelte:head>
  <title>{title}</title>
</svelte:head>
{#if !mounting}
  <div transition:fade={transitionParamsStandard} class="h-full flex flex-col">
    <Main>
      <slot />
    </Main>
  </div>
{:else}
  <div class="text-faded h-full flex flex-col justify-center items-center">
    Loading...
  </div>
{/if}
<div id="modal" class="fixed z-40" />
<div id="backdrop" />
<script>
import '../css/app.css'
import { mainNameShort } from '$data/strings'
import Main from '../layouts/Main.svelte'
import { onMount } from 'svelte'
import { onNavigate } from '$app/navigation'
import { fade } from 'svelte/transition'
import { transitionParamsStandard } from '$data/objects'

/**
 * @type {Boolean}
 */
let mounting = true

const resetVh = () => {
  // From https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
}

$: title = mainNameShort

onMount(() => {
  resetVh()
  window.addEventListener('resize', resetVh)

  setTimeout(() => {
    mounting = false
    localStorage.setItem('wlb', '1')
  }, 1000)
})

onNavigate((navigation) => {
  // @ts-ignore
  if (!document.startViewTransition)
    return

  return new Promise((resolve) => {
    // @ts-ignore
    document.startViewTransition(async () => {
      resolve()
      await navigation.complete
    })
  })
})
</script>
