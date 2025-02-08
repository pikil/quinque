<div
  role="button"
  tabindex="0"
  class={classes}
  title="Current play sequence"
  onclick={showDetails}
  onkeypress={noop}
>
  <Icon name={modeIcon} class={currentClasses} />
  <Icon name={mode1Icon} class={followingPreviewClasses} />
  <Icon name={mode2Icon} class={followingPreviewClasses} />
</div>
<Modal showing={showingDetails} hideOk ondismiss={hideDetails}>
  <div class="flex flex-col gap-6">
    <p class="text-center text-faded">The current sequence is:</p>
    <div class="flex flex-col items-center justify-center gap-2">
      <p>Current pattern and colour</p>
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
        ** Refer to <a href={rulesPath} target="_blank" class={linkClasses}>game rules</a> for more details;
      </p>
    </div>
  </div>
</Modal>
<script>
import Icon from '$ui/Icon.svelte'
import { enteringMode, enteringMode1, enteringMode2 } from '$stores/user-store'
import { getModeIcon } from '$lib'
import Modal from '$ui/Modal.svelte'
import { rulesPath } from '$data/strings'
import { linkClasses } from '$utils/dom'
import { noop } from '$utils'

const previewClasses = 'h-4 w-4'
const followingPreviewClasses = previewClasses + ' text-faded'
const detailClasses = 'h-8 w-8'
const followingDetailClasses = detailClasses + ' text-faded'

/**
 * @typedef {Object} Props
 * @property {String} color
 * @property {String} [class]
 */

/** @type {Props} */
let {
  color,
  class: klass
} = $props()

/**
 * @type {Boolean}
 */
let showingDetails = $state(false)

const showDetails = () => {
  showingDetails = true
}

const hideDetails = () => {
  showingDetails = false
}

let modeIcon = $derived(getModeIcon($enteringMode))
let mode1Icon = $derived(getModeIcon($enteringMode1))
let mode2Icon = $derived(getModeIcon($enteringMode2))
let classes = $derived('flex flex-row items-center justify-center gap-6' + (klass ? ' ' + klass : ''))
let currentClasses = $derived(previewClasses + ' ' + color)
let currentDetailClasses = $derived(detailClasses + ' ' + color)
</script>
