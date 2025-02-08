<!-- eslint-disable max-len -->
<div class="px-4">
  <ul class="list-disc pl-6">
    <li class={liClasses}>You and your opponent have to fill the grid with your colour;</li>
    <li class={liClasses}>Set your colour on the grid by tapping the square without a colour;</li>
    <li class={liClasses}>The game takes places in turns: First player, then Second player, then First player again and so on;</li>
    <li class={liClasses}>Each turn follows a specific pattern for filling blocks on the grid;</li>
    <li class={liClasses}>
      The patterns are:
      <ul>
        {#each patterns as { icon, pattern }}
          <li class={liClasses}><Icon name={icon} class={iconClasses} />&nbsp;&nbsp;{pattern};</li>
        {/each}
      </ul>
    </li>
    <li class={liClasses}>Single block selection always starts the game;</li>
    <li class={liClasses}>Each turn (except the very first one) receives the pattern randomly, but players always know the current and the next two patterns (look above the score);</li>
    <li class={liClasses}>Every coloured block is worth 5 points. However, 1 point is deducted if it has horizontally adjacent block(s) (left or right or both) and 1 is deducted if it has vertically adjacent block(s) (top or bottom or both). So, the actual score of a single block could be 3, 4 or 5 points.</li>
    <li>
      <p>Score examples:</p>
      <ul class="pl-6 list-[circle]">
        <li>Three blocks in a line: 4 + 4 + 4 = 12 points,</li>
        <li>Three blocks forming a corner: 4 + 3 + 4 = 11 points,</li>
        <li>Four blocks in a 2x2 square: 3 + 3 + 3 + 3 = 12 points</li>
      </ul>
    </li>
    
    <li class={liClasses}>Once a block is placed, it becomes inactive and it will add up 3, 4 or 5 points (depending on it's neighbours) to the total colour's score at the end of the game;</li>
    <li class={liClasses}>When a coloured block is placed, it can change the colour of adjacent blocks if it's positioned next to a block of the same colour on both sides, effectively 'flipping' them.</li>
    <li class={liClasses}>The game ends when there are no free blocks left on the grid;</li>
    <li class={liClasses}>The player with the highest number of points wins.</li>
    <li class={liClasses}>Enjoy the game and good luck outsmarting the opponent!</li>
  </ul>
</div>
<script>
import Icon from '$ui/Icon.svelte'
import {
  customIconAxesDirection,
  customIconSingleDot,
  customIconDiagonalsDirection,
  customIconFallingDiagonal,
  customIconBackingDiagonal,
  customIconHorizontal,
  customIconVertical
} from '$vendor/icons/custom-icons'

const liClasses = 'py-2'
const iconClasses = 'h-4 w-4 text-color2'

const patterns = [
  {
    icon: customIconSingleDot,
    score: '5 points (One block, no adjacent ones)',
    pattern: '1 single block selection'
  },
  {
    icon: customIconAxesDirection,
    score: '15 points (4 have got adjacents in a single axis and 1 has got adjacents in both)',
    pattern: '5 blocks selection in axes'
  },
  {
    icon: customIconDiagonalsDirection,
    score: 25,
    pattern: '5 blocks selection in diagonals'
  },
  {
    icon: customIconFallingDiagonal,
    score: 25,
    pattern: '5 blocks selection in a rising diagonal'
  },
  {
    icon: customIconBackingDiagonal,
    score: 25,
    pattern: '5 blocks selection in a falling diagonal'
  },
  {
    icon: customIconHorizontal,
    score: 20,
    pattern: '5 blocks selection in horizontal axis'
  },
  {
    icon: customIconVertical,
    score: 20,
    pattern: '5 blocks selection in vertical axis'
  }
]
</script>
