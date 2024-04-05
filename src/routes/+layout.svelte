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
  <div
    transition:fade={transitionParams}
    class="fixed h-device w-full top-0 left-0 z-50 flex flex-col items-center justify-center bg-gray-800"
  >
    <div class="flex flex-row justify-center animate-bounce">
      <div class={indigoRectClasses} />
      <div class={pinkRectClasses} />
    </div>
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
import { quintInOut } from 'svelte/easing'

const rectClasses = 'h-20 w-20 rounded-md relative flex flex-col justify-center items-center text-white font-bold opacity-95'
const indigoRectClasses = rectClasses + ' left-5 bg-indigo-400 -rotate-[30deg]'
const pinkRectClasses = rectClasses + ' -left-5 top-2 bg-pink-400 -rotate-[8deg]'
const transitionParams = {
  easing: quintInOut,
  duration: 300
}

/**
 * @type {Boolean}
 */
let mounting = true

const resetVh = () => {
  // From https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
}

$: title = mainNameShort

onMount(async () => {
  resetVh()
  window.addEventListener('resize', resetVh)

  const cloak = new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  await cloak

  mounting = false
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
