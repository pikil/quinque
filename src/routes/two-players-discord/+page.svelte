<div class="text-white px-2 h-full flex flex-col gap-6 justify-center items-center">
  <PlayButton mode={playModes.FRIEND_LOCAL} label="Play" />
</div>
<script>
import { headerTitle } from '$stores/layout-store'
import PlayButton from '$blocks/PlayButton.svelte'
import { playModes } from '$data/objects'
import { onMount } from 'svelte'
import { DiscordSDK } from '@discord/embedded-app-sdk'

$headerTitle = 'Play with friend'

/**
 * @type {DiscordSDK?}
 */
let discordSdk = null

const startSdk = () => {
  if (!discordSdk)
    discordSdk = new DiscordSDK(import.meta.env.VITE_CLIENT_ID)

  // @todo Finalize Discord-related functionality once approved by the Discord team
}

onMount(startSdk)
</script>
