<div class={containerClasses}>
  <div class={color1BlockClass}>
    <GameScoreDigit digit={score1Arr[0]} class={score1Class} />
    <div class={separator1Class}></div>
    <GameScoreDigit digit={score1Arr[1]} class={score1Class} />
    <div class={separator1Class}></div>
    <GameScoreDigit digit={score1Arr[2]} class={score1Class} />
  </div>
  <div class="text-xs text-gray-500">vs</div>
  <div class={color2BlockClass}>
    <GameScoreDigit digit={score2Arr[0]} class={score2Class} />
    <div class={separator2Class}></div>
    <GameScoreDigit digit={score2Arr[1]} class={score2Class} />
    <div class={separator2Class}></div>
    <GameScoreDigit digit={score2Arr[2]} class={score2Class} />
  </div>
</div>
<script>
import GameScoreDigit from '$blocks/GameScoreDigit.svelte'

/**
 * @typedef {Object} Props
 * @property {Number} score1
 * @property {Number} score2
 * @property {String} score1Class
 * @property {String} score2Class
 * @property {String} [class]
 */

/** @type {Props} */
let {
  score1 = 0,
  score2 = 0,
  score1Class = '',
  score2Class = '',
  class: klass
} = $props()

const borderOpacity = 'border-opacity-30'
const blockClass = 'flex flex-row border-2 rounded-md ' + borderOpacity
const separatorClass = 'border h-[30px] ' + borderOpacity
const color1BlockClass = blockClass + ' border-color1'
const color2BlockClass = blockClass + ' border-color2'
const separator1Class = separatorClass + ' border-color1'
const separator2Class = separatorClass + ' border-color2'

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

let score1Arr = $derived(splitDigits(score1))
let score2Arr = $derived(splitDigits(score2))
let containerClasses = $derived('flex flex-row gap-3 items-center' + (klass ? ' ' + klass : ''))
</script>
