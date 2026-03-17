<button
  role="switch"
  aria-label="Toggle reduced motion"
  aria-checked={value}
  {onclick}
  class={btnCss}
>
  <span class={knobCss}></span>
</button>
<script>
  const defCss = 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden'
  const defKnobCss = 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'

  /**
   * @typedef {Object} Props
   * @property {boolean} value
   * @property {(_: boolean) => void} [ontoggle]
   */

  /** @type {Props} */
  let {
    value = $bindable(false),
    ontoggle
  } = $props()

  const onclick = () => {
    value = !value
    ontoggle?.call(null, value)
  }

  let btnCss = $derived(defCss + (value ? ' bg-primary' : ' bg-gray-700/65'))
  let knobCss = $derived(defKnobCss + (value ? ' translate-x-5' : ' translate-x-0'))
</script>
