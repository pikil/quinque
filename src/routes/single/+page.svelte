<div class="text-white px-2 h-full flex flex-col gap-6 justify-center items-center">
  <PlayButton />
</div>
<script>
import { headerTitle } from '$stores/layout-store'
import PlayButton from '$blocks/PlayButton.svelte'

$headerTitle = 'Play with computer'
</script>
