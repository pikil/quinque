<div class="flex flex-col sm:flex-row justify-center items-center gap-6 pb-6 pt-2">
  {#each links as { label, href }, i}
    <Button {href} {label} class={(selectedIndex === i ? sublinkActiveClasses : sublinkPassiveClasses)} rounded={false} dense />
  {/each}
</div>
<script>
import { aboutPath, privacyPath, termsPath } from '$data/strings'
import Button from '$ui/buttons/Button.svelte'
import { sublinkActiveClasses, sublinkPassiveClasses } from '$utils/dom'

/**
 * @type {0|1|2|-1}
 */
export let selectedIndex = -1

const links = [
  {
    label: 'The game',
    href: aboutPath
  },
  {
    label: 'Terms of service',
    href: termsPath
  },
  {
    label: 'Privacy policy',
    href: privacyPath
  }
]
</script>
