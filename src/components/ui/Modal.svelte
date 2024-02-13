<ModalWrapper
  bind:showing
  {disabled}
  on:ok={onOK}
  on:dismiss={onDismiss}
>
  <div
    use:portal
    class={classes}
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0 z-10 overflow-y-auto" transition:scale|global={transitionParams}>
      <div
        role="button"
        tabindex="0"
        class="flex min-h-full justify-center p-4 text-center items-center sm:p-0 "
        on:click|self={onDismiss}
        on:keypress|self={onDismiss}
      >
        <div class="relative transform overflow-hidden rounded-lg shadow-lg shadow-gray-800 text-white text-left sm:my-8 w-full max-w-[600px]">
          <div class="bg-gray-600 py-4">
            {#if title}
              <div id="modal-title" class="flex flex-row gap-3 items-center pl-4 pr-2 pb-3">
                <div class="flex-grow min-w-0 ellipsis text-gray-300 select-none">{title}</div>
                <Button
                  round
                  icon={biX}
                  iconClass="h-6 w-6 text-faded"
                  on:click={onDismiss}
                />
              </div>
            {/if}
            <div class="px-4">
              <slot />
            </div>
          </div>
          {#if !hideOk || !hideCancel}
            <div class="flex flex-col-reverse gap-3 bg-gray-700 p-3 sm:flex-row">
              {#if !hideCancel}
                <Button
                  label={dismissLabel}
                  class="w-full text-faded"
                  disabled={loading}
                  on:click={onDismiss}
                />
              {/if}
              {#if !hideOk}
                <PrimaryButton
                  label={okLabel}
                  class="w-full"
                  disabled={disabled}
                  loading={loading}
                  on:click={onOK}
                />
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</ModalWrapper>
<script>
import { scale } from 'svelte/transition'
import { quintInOut } from 'svelte/easing'
import { createEventDispatcher } from 'svelte'
import PrimaryButton from '$ui/buttons/PrimaryButton.svelte'
import Button from '$ui/buttons/Button.svelte'
import { biX } from '$vendor/icons/bootstrap-icons'
import ModalWrapper from '$components/wrappers/ModalWrapper.svelte'
import { portal } from '$utils/dom'

const dispatch = createEventDispatcher()

const transitionParams = {
  duration: 200,
  easing: quintInOut
}

/**
 * @type {Boolean}
 */
export let showing = false

/**
 * @type {String}
 */
export let title = ''

/**
 * @type {String}
 */
export let okLabel = 'OK'

/**
 * @type {String}
 */
export let dismissLabel = 'Back'

/**
 * @type {Boolean}
 */
export let disabled = false

/**
 * @type {Boolean}
 */
export let loading = false

/**
 * @type {Boolean}
 */
export let hideOk = false

/**
 * @type {Boolean}
 */
export let hideCancel = false

const onOK = () => {
  dispatch('ok')
}

const onDismiss = () => {
  dispatch('dismiss')
}

$: classes = 'relative z-40 p-4'
  + ($$props.class ? ' ' + $$props.class : '')
</script>
