<!-- eslint-disable max-len -->
<div class="text-white px-2">
  <AboutPageSublinks selectedIndex={0} />
  <div class="px-4">
    <h3 class={pageTitleClasses}>What is {mainNameShort}?</h3>
    <p class={pageParagraphClasses}>{mainNameShort} (/ˈkwɪŋkweɪ/) is a strategic and competitive game where players engage in a battle of wits on a grid. Whether facing off against each other or challenging the computer, the objective remains the same: dominate the board by placing coloured blocks.</p>
    <h3 class={pageTitleClasses}>Gameplay</h3>
    <p class={pageParagraphClasses}>Grid: The game board consists of a square grid, each cell waiting to be claimed.</p>
    <p class={pageParagraphClasses}>Players: Two opponents take turns, each representing a distinct colour—Player 1 (Blue) and Player 2 (Pink).</p>
    <p class={pageParagraphClasses}>Turns: Players strategically place their coloured blocks on the grid, aiming to outmaneuver their adversary.</p>
    <p class={pageParagraphClasses}>Victory: The player who gains more points at the end of the game, wins.</p>
    <p class={pageParagraphClasses}>Tactical Moves:</p>
    <p class={pageParagraphClasses}>Blocking: Prevent your opponent from completing a line by strategically placing your blocks.</p>
    <p class={pageParagraphClasses}>Countering: Anticipate your opponent's moves and counter their strategies.</p>
    <p class={pageParagraphClasses}>{mainNameShort} combines logic, foresight, and cunning—a true test of mental prowess. Can you outwit your opponent and claim victory?</p>
  </div>
  <div class="px-4 pt-8">
    <h3 class={pageTitleClasses}>Online play via WebRTC</h3>
    <p>We are using <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API" target="_blank" class="text-primary">WebRTC API</a> for peer-to-peer serverless online sessions. This is particularly handy, as we can host this game indefinitely with absolutely no cost and still allow you to play with your friend online.</p>
    <p>Even though this is not a kind of game which would need such speeds, this connection provides minimal latency between peers.</p>
    <p>Please make sure you are familiar with WebRTC concept and how it works, as you are establishing direct connection between peers.</p>
  </div>
  <div class="px-4 pt-8">
    <h3 class={pageTitleClasses}>Origins</h3>
    <p class={pageParagraphClasses}>This game came up to the author when they were waiting for the flight from Christchurch to Auckland with his wife. He forgot to take the card games with him, but he still had to come up with something to pass the time.</p>
    <p>So, instead of the game itself, he had a wonderful idea to pitch to the wife with the game and it's rules.</p>
    <p>The plan worked and the time passed during that discussion, and the first working prototype of the game was designed on the laptop during the flight.</p>
    <p class={pageParagraphClasses}>This game is free and opensource, so you are free to play the game here or you are free to fork the source code and edit it in any way.</p>
  </div>
</div>
<script>
import { mainNameShort } from '$data/strings'
import { pageParagraphClasses, pageTitleClasses } from '$utils/dom'
import AboutPageSublinks from '$blocks/AboutPageSublinks.svelte'
import { headerTitle } from '$stores/layout-store'

$headerTitle = 'About ' + mainNameShort
</script>
