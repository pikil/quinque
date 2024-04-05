<header class="flex flex-row items-center py-4 gap-6 px-2">
  <Button {href} icon={fasArrowLeft} class="text-primary" />
  <h2 class="flex-1 text-xl">{title}</h2>
</header>
<script>
import { homePath } from '$data/strings'
import Button from '$ui/buttons/Button.svelte'
import { fasArrowLeft } from '$vendor/icons/fontawesome6-icons'

/**
 * @type {String}
 */
export let href = homePath

/**
 * @type {String}
 */
export let title
</script>
