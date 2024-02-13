<!-- eslint-disable max-len -->
<div class="max-w-[600px] max-auto text-white px-2">
  <PageHeader {title} />
  <div class="px-4 pt-8">
    <h3 class={titleClasses}>What is {mainNameShort}?</h3>
    <p class={paragraphClasses}>{mainNameShort} is a strategic and competitive game where players engage in a battle of wits on a grid. Whether facing off against each other or challenging the computer, the objective remains the same: dominate the board by placing coloured blocks.</p>
    <h3 class={titleClasses}>Gameplay:</h3>
    <p class={paragraphClasses}>Grid: The game board consists of a square grid, each cell waiting to be claimed.</p>
    <p class={paragraphClasses}>Players: Two opponents take turns, each representing a distinct colour—Player 1 (Blue) and Player 2 (Pink).</p>
    <p class={paragraphClasses}>Turns: Players strategically place their coloured blocks on the grid, aiming to outmaneuver their adversary.</p>
    <p class={paragraphClasses}>Victory: The player who gains more points at the end of the game, wins.</p>
    <p class={paragraphClasses}>Tactical Moves:</p>
    <p class={paragraphClasses}>Blocking: Prevent your opponent from completing a line by strategically placing your blocks.</p>
    <p class={paragraphClasses}>Countering: Anticipate your opponent's moves and counter their strategies.</p>
    <p class={paragraphClasses}>{mainNameShort} combines logic, foresight, and cunning—a true test of mental prowess. Can you outwit your opponent and claim victory?</p>
  </div>
  <div class="px-4 pt-8">
    <h3 class={titleClasses}>Online play via WebRTC</h3>
    <p>We are using <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API" target="_blank" class="text-primary">WebRTC API</a> for peer-to-peer serverless online sessions. This is particularly handy, as we can host this game indefinitely with absolutely no cost and still allow you to play with your friend online.</p>
    <p>Even though, this is not a kind of game which would need such speeds, this connection allows smallest latencies between between peers.</p>
    <p>Please make sure you are familiar with WebRTC concept and how it works, as you are establishing direct connection between peers.</p>
  </div>
  <div class="px-4 pt-8">
    <h3 class={titleClasses}>Origins</h3>
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
const titleClasses = 'pt-6 pb-2 text-xl font-bold'

</script>
