<!-- eslint-disable max-len -->
<div class="max-w-[600px] max-auto text-white px-2">
  <PageHeader {title} />
  <div class="px-4">
    <p class={paragraphClasses}>This game came up to the author when they were waiting for the flight from Christchurch to Auckland with his wife. He forgot to take the card games with him, but he still had to come up with something to pass the time.</p>
    <p>So, instead of the game itself, he had a wonderful idea to pitch to the wife with the game and it's rules.</p>
    <p>The plan worked and the time passed during that discusion, and the first working prototype of the game was designed on the laptop during the flight.</p>
    <p class={paragraphClasses}>This game is free and opensource, so you are free to play with the game here or you are free to fork the source code and edit it in any way.</p>
  </div>
</div>
<script>
import { mainNameShort } from '$data/strings'
import PageHeader from '../../../layouts/PageHeader.svelte'

const title = 'About ' + mainNameShort
const paragraphClasses = 'py-2'
</script>
