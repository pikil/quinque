<div role="button" tabindex="0" class={classes} on:click={showDetails} on:keypress={noop}>
  <Icon name={modeIcon} class={currentClasses} />
  <Icon name={mode1Icon} class={followingPreviewClasses} />
  <Icon name={mode2Icon} class={followingPreviewClasses} />
</div>
<Modal showing={showingDetails} hideOk on:dismiss={hideDetails}>
  <div class="flex flex-col gap-6">
    <p class="text-center text-faded">The current sequence is:</p>
    <div class="flex flex-col items-center justify-center gap-2">
      <p>Pattern/color to play</p>
      <Icon name={modeIcon} class={currentDetailClasses} />
    </div>
    <div class="flex flex-col items-center justify-center gap-2">
      <p class="text-faded">The pattern to follow</p>
      <Icon name={mode1Icon} class={followingDetailClasses} />
    </div>
    <div class="flex flex-col items-center justify-center gap-2">
      <p class="text-faded">The pattern after that</p>
      <Icon name={mode2Icon} class={followingDetailClasses} />
    </div>
    <div class="text-faded text-sm">
      <p>* This screen changes with every player's turn;</p>
      <p>
        ** Refer to <a href={rulesPath} target="_blank" class="text-primary hover:underline">game rules</a> for more details;
      </p>
    </div>
  </div>
</Modal>
<script>
import Icon from '$ui/Icon.svelte'
import { enteringMode, enteringMode1, enteringMode2 } from '$stores/user-store'
import { getModeIcon } from '$lib'
import { noop } from 'svelte/internal'
import Modal from '$ui/Modal.svelte'
import { rulesPath } from '$data/strings'

const previewClasses = 'h-4 w-4'
const followingPreviewClasses = previewClasses + ' text-faded'
const detailClasses = 'h-8 w-8'
const followingDetailClasses = detailClasses + ' text-faded'

/**
 * @type {String}
 */
export let color

/**
 * @type {Boolean}
 */
let showingDetails = false

const showDetails = () => {
  showingDetails = true
}

const hideDetails = () => {
  showingDetails = false
}

$: modeIcon = getModeIcon($enteringMode)
$: mode1Icon = getModeIcon($enteringMode1)
$: mode2Icon = getModeIcon($enteringMode2)
$: classes = 'flex flex-row items-center justify-center gap-4'
  + ($$props.class ? ' ' + $$props.class : '')
$: currentClasses = previewClasses + ' ' + color
$: currentDetailClasses = detailClasses + ' ' + color
</script>
