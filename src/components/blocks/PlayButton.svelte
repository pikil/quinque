<Button
  {label}
  {href}
  rounded={false}
  class={mainBtnClasses}
/>
<Button
  iconRight={fasChevronDown}
  iconClass="text-primary h-4 w-4"
  class="text-2xl"
  on:click={showSelection}
>
  <p>
    <span class="text-primary">{size}</span>
  </p>
</Button>
<Modal showing={selectionShowing} hideOk title="Grid size" on:dismiss={hideSelection}>
  <div class="flex flex-col gap-4">
    {#each sizeButtons as { onclick, label }}
      <Button {label} class={selectBtnClasses} on:click={onclick} />
    {/each}
  </div>
</Modal>
<script>
import Button from '$ui/buttons/Button.svelte'
import { fasChevronDown } from '$vendor/icons/fontawesome6-icons'
import { mainBtnClasses } from '$utils/dom'
import Modal from '$ui/Modal.svelte'
import { allowedGridSizes } from '$data/arrays'
import { getPath } from '$utils/generators'
import { defaultGridSize } from '$data/numbers'
import { playModes } from '$data/objects'

const selectBtnClasses = 'w-full text-2xl hover:bg-gray-700 transition-colors'

const sizeButtons = allowedGridSizes.map((s) => {
  return {
    label: s + ' blocks',
    onclick: () => {
      selectedSize = s
      hideSelection()
    }
  }
})

/**
 * @type {Number}
 */
export let mode = playModes.AI

/**
 * @type {String}
 */
export let label = 'Play'

/**
 * @type {Number}
 */
let selectedSize = defaultGridSize

/**
 * @type {Boolean}
 */
let selectionShowing = false

const showSelection = () => {
  selectionShowing = true
}

const hideSelection = () => {
  selectionShowing = false
}

$: size = selectedSize + ' blocks'
$: href = getPath('/play?s=' + selectedSize) + (mode ? '&m=' + mode : '')
</script>
