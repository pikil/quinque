<svelte:head>
  <title>{title}</title>
</svelte:head>
<div transition:fade={transitionParamsStandard} class="h-full flex flex-col uppercase">
  {#if $headerTitle}
    <Header />
  {/if}
  <Main>
    {@render children?.()}
  </Main>
</div>
{#if $mounting}
  <div
    out:fade={transitionParams}
    class="fixed h-device w-full top-0 left-0 z-50 flex flex-col items-center justify-center bg-gray-800"
  >
    <div class="flex flex-row justify-center animate-bounce">
      <div class={indigoRectClasses}></div>
      <div class={pinkRectClasses}></div>
    </div>
  </div>
{/if}
<div id="modal" class="fixed z-40"></div>
<Modal
  showing={confirmDataProvided}
  title="Confirm"
  okLabel={$confirmData.okLabel}
  dismissLabel={$confirmData.dismissLabel}
  onok={$confirmData.ok}
  ondismiss={$confirmData.dismiss}
>
  <p>{$confirmData.text}</p>
</Modal>
<script>
import '../css/app.css'
import { mainNameShort } from '$data/strings'
import Main from '$layouts/Main.svelte'
import { onMount } from 'svelte'
import { onNavigate } from '$app/navigation'
import { fade } from 'svelte/transition'
import { transitionParamsStandard } from '$data/objects'
import { quintInOut } from 'svelte/easing'
import Modal from '$ui/Modal.svelte'
import { confirmData } from '$stores/system-store'
import { mounting, headerTitle } from '$stores/layout-store'
import Header from '$layouts/Header.svelte'

/**
 * @typedef {Object} Props
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let {
  children
} = $props()

const rectClasses = 'h-20 w-20 rounded-md relative flex flex-col justify-center items-center text-white font-bold opacity-95'
const indigoRectClasses = rectClasses + ' left-5 bg-color1 -rotate-[30deg]'
const pinkRectClasses = rectClasses + ' -left-5 top-2 bg-color2 -rotate-[8deg]'
const transitionParams = {
  easing: quintInOut,
  duration: 300
}

const resetVh = () => {
  // From https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
}

let title = $derived(mainNameShort)
let confirmDataProvided = $derived(!!$confirmData?.text)

onMount(async () => {
  resetVh()
  window.addEventListener('resize', resetVh)

  await new Promise((resolve) => {
    setTimeout(resolve, 800)
  })

  $mounting = false
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
