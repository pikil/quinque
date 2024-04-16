<div class="text-white px-2 h-full flex flex-col gap-6 justify-center items-center">
  <PlayButton description="Play with the computer" />
</div>
<script>
import { headerTitle } from '$stores/layout-store'
import PlayButton from '$blocks/PlayButton.svelte'

$headerTitle = 'Single player'
</script>
