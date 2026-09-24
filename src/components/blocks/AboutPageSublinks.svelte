<div class="flex flex-col sm:flex-row justify-center items-center gap-6 pb-6 pt-2">
  {#each links as { label, href }, i (i)}
    <Button
      {href}
      {label}
      class={(selectedIndex === i ? sublinkActiveClasses : sublinkPassiveClasses)}
      rounded={false}
      dense
    />
  {/each}
</div>
<script>
import { resolve } from '$app/paths'
import Button from '$ui/buttons/Button.svelte'
import { sublinkActiveClasses, sublinkPassiveClasses } from '$utils/dom'

/**
 * @typedef {Object} Props
 * @property {0|1|2|-1} [selectedIndex]
 */

/** @type {Props} */
let {
  selectedIndex = -1
} = $props()

const links = [
  {
    label: 'The game',
    href: resolve('/page/about')
  },
  {
    label: 'Terms of service',
    href: resolve('/page/terms-of-service')
  },
  {
    label: 'Privacy policy',
    href: resolve('/page/privacy-policy')
  }
]
</script>
