<div class="text-white px-2 h-full flex flex-col gap-4 justify-center items-center">
  {#if navigatingAway}
    <ListLoader />
  {:else}
    <PlayButton mode={playModes.FRIEND_ONLINE} label="Host" />
    <div class="pt-6">
      <p class="text-faded text-center pb-4">Or join</p>
      <div class="flex flex-row items-center justify-center">
        <input
          bind:value={joinId}
          class="w-24 h-12 p-2 bg-gray-600 rounded-l-md text-gray-300 uppercase outline-hidden"
          placeholder="Room ID"
          maxlength="6"
        />
        <Button
          label="Join"
          class="text-primary bg-gray-600 rounded-r-md"
          rounded={false}
          disabled={joinBtnDisabled}
          onclick={goToRoom}
        />
      </div>
    </div>
  {/if}
</div>
<script>
import { headerTitle } from '$stores/layout-store'
import PlayButton from '$blocks/PlayButton.svelte'
import { playModes } from '$data/objects'
import ListLoader from '$blocks/loaders/ListLoader.svelte'
import Button from '$ui/buttons/Button.svelte'
import { getPath } from '$utils/generators'
import { goto } from '$app/navigation'
import { tick } from 'svelte'

$headerTitle = 'Play online'

/**
 * @type {String}
 */
let joinId = $state('')

/**
 * @type {Boolean}
 */
let navigatingAway = $state(false)

const goToRoom = async () => {
  navigatingAway = true

  await tick()

  goto(
    getPath('/play?room=' + encodeURIComponent(joinId.toUpperCase()))
  )
}

let joinBtnDisabled = $derived(joinId.length !== 6)
</script>
