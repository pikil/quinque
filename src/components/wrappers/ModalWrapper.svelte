{#if showing}
  <slot />
{/if}
<Backdrop {showing} on:click={onDismiss} on:keypress={onDismiss} />
<script>
import { browser } from '$app/environment'
import { onNavigate } from '$app/navigation'
import Backdrop from '$ui/Backdrop.svelte'
import { blockGlobalScroll, unblockGlobalScroll } from '$utils/dom'
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

/**
 * @type {Boolean}
 */
export let showing = false

/**
 * @type {Boolean}
 */
export let disabled = false

const onDismiss = () => {
  dispatch('dismiss')
}

$: {
  if (browser) {
    /**
     * @param {KeyboardEvent} evt
     */
    const handleKeyboard = (evt) => {
      // Do not listen for events when in inputs
      // @ts-ignore
      if (['input', 'textarea'].indexOf(evt.target?.type) >= 0)
        return

      let applied = false

      switch (evt.key) {
        case 'Escape':
          onDismiss()
          applied = true
          break
        case 'Enter':
          if (!disabled)
            dispatch('ok')

          applied = true
          break
        default: break
      }

      if (applied) {
        evt.preventDefault()
        evt.stopPropagation()
      }
    }

    if (showing) {
      document.addEventListener('keydown', handleKeyboard)
      blockGlobalScroll()
    } else {
      document.removeEventListener('keydown', handleKeyboard)
      unblockGlobalScroll()
    }
  }
}

onNavigate(() => {
  showing = false
})
</script>
