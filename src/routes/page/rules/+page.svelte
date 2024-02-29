<div class="max-w-[600px] max-auto text-white px-2">
  <PageHeader {title} />
  <div class="px-4">
    <p class="pb-4 text-faded">Please see the rules below:</p>
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
      <!-- eslint-disable-next-line max-len -->
      <li class={liClasses}>Each turn (except the very first one) receives the pattern randomly, but players always know the current and the next two patterns;</li>
      <!-- eslint-disable-next-line max-len -->
      <li class={liClasses}>Each colored block on the grid gives the player 5 points. However, if the block is adjacent to a block with the same colour, one point is deducted from that score (once per axis). So, two adjacent blocks will give 8 instead of 10 (4 + 4), and three adjacent blocks horizontally and vertically will give 9 instead of 15. So be mindful of where you place your blocks.</li>
      <li class={liClasses}>Once the block is in place, it becomes inactive and it stores the score value for the given colour;</li>
      <!-- eslint-disable-next-line max-len -->
      <li class={liClasses}>When a colored block is placed, it can change the color of adjacent blocks if it's positioned next to a block of the same color on both sides, effectively 'flipping' them.</li>
      <li class={liClasses}>The game ends when there are no free blocks left on the grid;</li>
      <li class={liClasses}>The player with the highest number of points wins.</li>
      <li class={liClasses}>Enjoy the game and good luck outsmarting the opponent!</li>
    </ul>
  </div>
</div>
<script>
import PageHeader from '../../../layouts/PageHeader.svelte'
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

const title = 'Game rules'
const liClasses = 'py-2'
const iconClasses = 'h-4 w-4 text-pink-400'

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
