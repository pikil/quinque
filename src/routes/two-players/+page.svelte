<div class="text-white px-2 h-full flex flex-col gap-6 justify-center items-center">
  <PlayButton mode={playModes.FRIEND_LOCAL} label="Play" />
</div>
<script>
import { headerTitle } from '$stores/layout-store'
import PlayButton from '$blocks/PlayButton.svelte'
import { playModes } from '$data/objects'

$headerTitle = 'Play with friend'
</script>
