<header class="flex flex-row items-center py-4 gap-6 px-2">
  <Button
    icon={fasArrowLeft}
    class="text-gray-4000"
    on:click={onBack}
  />
  <h2 class="flex-1 text-xl">{title}</h2>
</header>
<script>
import { goto } from '$app/navigation'
import Button from '$ui/buttons/Button.svelte'
import { fasArrowLeft } from '$vendor/icons/fontawesome6-icons'

const onBack = () => {
  // Odd bug here doesn't allow to use import.meta.env.BASE_URL, hardcoding for now
  goto('/quinque')
}

/**
 * @type {String}
 */
export let title
</script>
