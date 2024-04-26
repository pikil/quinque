<svelte:window bind:innerWidth></svelte:window>

<header class="w-full max-w-[600px] mx-auto flex flex-row items-center py-4 gap-6 px-2">
  <Button {href} icon={fasArrowLeft} {label} class="text-primary" />
  <h2 class="flex-1 text-xl text-white text-center">{$headerTitle}</h2>
  <div class={rightSpaceClass} />
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
let innerWidth = 0

$: smallScreen = innerWidth < hideThreshold
$: href = $headerHref || homePath
$: label = smallScreen  ? undefined : 'Back'
$: rightSpaceClass = smallScreen ? 'w-[32px]' : 'w-[82px]'
</script>
