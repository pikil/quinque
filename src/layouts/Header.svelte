<svelte:window bind:innerWidth></svelte:window>

<header class="w-full max-w-[600px] mx-auto flex flex-row items-center py-4 gap-6 px-2">
  <Button {href} icon={fasArrowLeft} {label} class="text-primary" />
  <h2 class="flex-1 text-xl text-white text-center">{$headerTitle}</h2>
  <div class={rightSpaceClass}></div>
</header>
<script>
import { homePath } from '$data/strings'
import { headerHref, headerTitle } from '$stores/layout-store'
import Button from '$ui/buttons/Button.svelte'
import { fasArrowLeft } from '$vendor/icons/fontawesome6-icons'

const hideThreshold = 512

/**
 * @type {Number}
 */
let innerWidth = $state(0)

let smallScreen = $derived(innerWidth < hideThreshold)
let href = $derived($headerHref || homePath)
let label = $derived(smallScreen  ? undefined : 'Back')
let rightSpaceClass = $derived(smallScreen ? 'w-[32px]' : 'w-[82px]')
</script>
