<div class={classes}>
  <Icon name={modeIcon} class={currentClasses} />
  <Icon name={mode1Icon} class="h-4 w-4 text-faded" />
  <Icon name={mode2Icon} class="h-4 w-4 text-faded" />
</div>
<script>
import Icon from '$ui/Icon.svelte'
import { enteringMode, enteringMode1, enteringMode2 } from '$stores/user-store'
import { getModeIcon } from '$lib'

/**
 * @type {String}
 */
export let color

$: modeIcon = getModeIcon($enteringMode)
$: mode1Icon = getModeIcon($enteringMode1)
$: mode2Icon = getModeIcon($enteringMode2)
$: classes = 'flex flex-row items-center justify-center gap-4'
  + ($$props.class ? ' ' + $$props.class : '')
$: currentClasses = 'h-4 w-4 ' + color
</script>
