<ModalWrapper
  {showing}
  {disabled}
  onok={onOK}
  ondismiss={onDismiss}
>
  {#if showing}
    <div
      class={classes}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0 cursor-auto">
          <Backdrop {showing} onclick={onDismiss} />
          <div
            transition:scale|global={transitionParams}
            class="relative transform overflow-hidden rounded-lg shadow-lg shadow-gray-800 text-white text-left sm:my-8 w-full max-w-[600px] z-40"
          >
            <div class="bg-gray-600 pt-3 pb-6">
              {#if title}
                <div id="modal-title" class="flex flex-row gap-3 items-center pl-4 pr-2 pb-3">
                  <div class="grow min-w-0 ellipsis text-gray-400 select-none">{title}</div>
                  <Button
                    rounded
                    icon={biX}
                    iconClass="h-6 w-6 text-gray-400"
                    onclick={onDismiss}
                  />
                </div>
              {/if}
              <div class="px-4">
                {@render children?.()}
              </div>
            </div>
            {#if !hideOk || !hideCancel}
              <div class="flex flex-col-reverse gap-3 bg-gray-700 p-3 sm:flex-row">
                {#if !hideCancel}
                  <Button
                    label={dismissLabel}
                    class="w-full text-faded"
                    disabled={loading}
                    onclick={onDismiss}
                  />
                {/if}
                {#if !hideOk}
                  <Button
                    label={okLabel}
                    class="w-full text-primary border-2 border-primary"
                    disabled={disabled}
                    loading={loading}
                    onclick={onOK}
                  />
                {/if}
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/if}
</ModalWrapper>
<script>
import { scale } from 'svelte/transition'
import { quintInOut } from 'svelte/easing'
import Button from '$ui/buttons/Button.svelte'
import { biX } from '$vendor/icons/bootstrap-icons'
import ModalWrapper from '$components/wrappers/ModalWrapper.svelte'
import { portal } from '$utils/dom'
import Backdrop from '$ui/Backdrop.svelte'
  import { beforeNavigate } from '$app/navigation'

/**
 * @typedef {Object} Props
 * @property {Boolean} [showing]
 * @property {String} [title]
 * @property {String} [okLabel]
 * @property {String} [dismissLabel]
 * @property {Boolean} [disabled]
 * @property {Boolean} [loading]
 * @property {Boolean} [hideOk]
 * @property {Boolean} [hideCancel]
 * @property {String} [class]
 * @property {Function} [onok]
 * @property {Function} [ondismiss]
 * @property {import('svelte').Snippet<[]>} [children]
 */

/** @type {Props} */
let {
  showing = $bindable(false),
  title = '',
  okLabel = 'OK',
  dismissLabel = 'Back',
  disabled = false,
  loading = false,
  hideOk = false,
  hideCancel = false,
  class: klass,
  onok,
  ondismiss,
  children
} = $props()

const transitionParams = {
  duration: 200,
  easing: quintInOut
}

const onOK = () => {
  if (disabled || hideOk || !onok)
    return

  onok()
}

const onDismiss = () => {
  if (hideCancel || !ondismiss)
    return

  ondismiss()
}

let classes = $derived('absolute z-40 p-4' + (klass ? ' ' + klass : ''))
</script>
