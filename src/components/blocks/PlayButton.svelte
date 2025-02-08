<Button
  iconRight={fasChevronDown}
  iconClass="text-primary h-4 w-4"
  class="text-2xl"
  onclick={showSelection}
>
  <p>
    <span class="text-primary">{size}</span>
  </p>
</Button>
<Button
  {label}
  {href}
  rounded={false}
  class={mainBtnClasses}
/>
<Modal showing={selectionShowing} hideOk title="Grid size" ondismiss={hideSelection}>
  <div class="flex flex-col gap-4">
    {#each sizeButtons as { onclick, label }}
      <Button {label} class={selectBtnClasses} onclick={onclick} />
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

/**
 * @typedef {Object} Props
 * @property {Number} [mode]
 * @property {String} [label]
 */

/** @type {Props} */
let {
  mode = playModes.AI,
  label = 'Play'
} = $props()

const selectBtnClasses = 'w-full text-2xl hover:bg-gray-700 transition-colors duration-300'

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
let selectedSize = $state(defaultGridSize)

/**
 * @type {Boolean}
 */
let selectionShowing = $state(false)

const showSelection = () => {
  selectionShowing = true
}

const hideSelection = () => {
  selectionShowing = false
}

let size = $derived(selectedSize + ' blocks')
let href = $derived(getPath('/play?s=' + selectedSize) + (mode ? '&m=' + mode : ''))
</script>
