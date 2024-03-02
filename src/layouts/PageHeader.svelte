<header class="flex flex-row items-center py-4 gap-6 px-2">
  <Button
    href={homePath}
    icon={fasArrowLeft}
    class="text-gray-4000"
  />
  <h2 class="flex-1 text-xl">{title}</h2>
</header>
<script>
import Button from '$ui/buttons/Button.svelte'
import { getPath } from '$utils/generators'
import { fasArrowLeft } from '$vendor/icons/fontawesome6-icons'

const homePath = getPath('/')

/**
 * @type {String}
 */
export let title
</script>
