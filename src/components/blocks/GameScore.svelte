<div class="flex flex-row gap-3 items-center">
  <div class="flex flex-row border-2 border-color1 rounded-md">
    <GameScoreDigit digit={score1Arr[0]} class={score1Class} />
    <div class={separator1Class} />
    <GameScoreDigit digit={score1Arr[1]} class={score1Class} />
    <div class={separator1Class} />
    <GameScoreDigit digit={score1Arr[2]} class={score1Class} />
  </div>
  <div class="text-primary">-</div>
  <div class="flex flex-row border-2 border-color2 rounded-md">
    <GameScoreDigit digit={score2Arr[0]} class={score2Class} />
    <div class={separator2Class} />
    <GameScoreDigit digit={score2Arr[1]} class={score2Class} />
    <div class={separator2Class} />
    <GameScoreDigit digit={score2Arr[2]} class={score2Class} />
  </div>
</div>
<script>
import GameScoreDigit from '$blocks/GameScoreDigit.svelte'

const separator1Class = 'border border-color1 h-[30px]'
const separator2Class = 'border border-color2 h-[30px]'

/**
 * @type {Number}
 */
export let score1 = 0

/**
 * @type {Number}
 */
export let score2 = 0

/**
 * @type {String}
 */
export let score1Class = ''

/**
 * @type {String}
 */
export let score2Class = ''

/**
 * @param {Number} num
 */
const splitDigits = (num) => {
  if (num <= 0)
    return [0, 0, 0]

  if (num >= 1000)
    return [9, 9, 9]

  const digit3 = num % 10
  num = num / 10 | 0
  const digit2 = num % 10
  num = num / 10 | 0
  const digit1 = num % 10

  return [digit1, digit2, digit3]
}

$: score1Arr = splitDigits(score1)
$: score2Arr = splitDigits(score2)
</script>
