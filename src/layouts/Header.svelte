<header class="w-full max-w-[600px] mx-auto flex flex-row items-center py-4 gap-6 px-2">
  <Button {href} icon={fasArrowLeft} class="text-primary" />
  <h2 class="flex-1 text-xl text-white">{$headerTitle}</h2>
</header>
<script>
import { homePath } from '$data/strings'
import { headerHref, headerTitle } from '$stores/layout-store'
import Button from '$ui/buttons/Button.svelte'
import { fasArrowLeft } from '$vendor/icons/fontawesome6-icons'

$: href = $headerHref || homePath
</script>
