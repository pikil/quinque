<div class="flex flex-col gap-4">
  <div class="flex items-center justify-between">
    <div>
      <h3 class="text-white font-bold">Colorblind Mode</h3>
      <p class="text-xs text-faded">Add patterns to colored blocks for better distinction</p>
    </div>
    <Toggle bind:value={$preferences.colorblindMode} />
  </div>

  <div class="flex items-center justify-between">
    <div>
      <h3 class="text-white font-bold">Haptic Feedback</h3>
      <p class="text-xs text-faded">Vibrate on block selection (mobile only)</p>
    </div>
    <Toggle bind:value={$preferences.hapticFeedback} />
  </div>

  <div class="flex items-center justify-between border-t border-gray-600 pt-4">
    <div>
      <h3 class="text-white font-bold">Reduce Motion</h3>
      <p class="text-xs text-faded">Minimize animations for accessibility</p>
    </div>
    <Toggle bind:value={$preferences.reducedMotion} />
  </div>
</div>

<script>
  import { preferences } from '$stores/preferences-store'
  import Toggle from './Toggle.svelte'
</script>
