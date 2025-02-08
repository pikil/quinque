{@render children?.()}
<script>
import { onNavigate } from '$app/navigation'
import { blockGlobalScroll, unblockGlobalScroll } from '$utils/dom'

/**
 * @typedef {Object} Props
 * @property {Boolean} [showing]
 * @property {Boolean} [disabled]
 * @property {Function} [onok]
 * @property {Function} [ondismiss]
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let {
  showing = false,
  disabled = false,
  onok,
  ondismiss,
  children
} = $props()

const onDismiss = () => {
  if (ondismiss)
    ondismiss()
}

$effect(() => {
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
        if (!disabled && onok)
          onok()

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
})

onNavigate(() => {
  showing = false
})
</script>
