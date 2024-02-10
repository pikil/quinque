<div class="h-full flex flex-col justify-center gap-8">
  <header class="pt-12 pb-6">
    <h1 class="text-white font-bold text-center text-3xl">Welcome to {mainNameShort}</h1>
    <Button
      href={repoPath}
      icon={biGithub}
      class="mx-auto text-faded mt-2"
      iconClass="h-5 h-5"
      target="_blank"
    />
  </header>
  <p class="text-faded text-center text-xl">Play</p>
  {#each buttons as { label, onclick }}
    <Button
      {label}
      dense
      rounded={false}
      class={btnClasses}
      on:click={onclick}
    />
  {/each}
  <div class="flex flex-row items-center justify-center mt-8">
    <Button
      rounded={false}
      label="1 player"
      class={playerCountBtnClasses[0]}
      on:click={set1Player}
    />
    <Button
      rounded={false}
      label="2 players"
      class={playerCountBtnClasses[1]}
      on:click={set2Players}
    />
  </div>
  <div class="flex-1 flex flex-col justify-end">
    <footer class="py-4">
      <div class="flex flex-row justify-center text-faded items-center gap-6">
        <a href={aboutLink} class={footerLinkClasses}>About</a>
        <a href={rulesLink} class={footerLinkClasses}>Rules</a>
        <a href={discordServerUrl} class={footerLinkClasses} target="_blank">Contacts</a>
      </div>
    </footer>
  </div>
</div>
<script>
import { afterNavigate, goto } from '$app/navigation'
import { allowedGridSizes } from '$data/arrays'
import { discordServerUrl, mainNameShort, repoPath } from '$data/strings'
import Button from '$ui/buttons/Button.svelte'
import { biGithub } from '$vendor/icons/bootstrap-icons'

const aboutLink = 'page/about'
const rulesLink = 'page/rules'
const btnClasses = 'bg-pink-400 hover:bg-pink-500 w-72 mx-auto text-2xl px-20 py-4 text-black rounded-xl transition-colors'
const activeBtnClass = 'text-black bg-pink-300'
const inactiveBtnClass = 'text-gray-400 bg-gray-600'
const leftBtnClasses = 'rounded-l-md'
const rightBtnClasses = 'rounded-r-md'
const footerLinkClasses = 'hover:underline'

/**
 * 0 - Single player, 1 - Against computer, 2 - Multiplayer
 * @type {Number}
 */
let playMode = 0

const buttons = allowedGridSizes.map((s) => {
  return {
    label: s + ' blocks',
    onclick: () => {
      let link = 'play?s=' + s

      if (!playMode)
        link += '&m=0'

      goto(link)
    }
  }
})

const set1Player = () => {
  playMode = 0
}

const set2Players = () => {
  playMode = 1
}

$: playerCountBtnClasses = playMode
  ? [leftBtnClasses + ' ' + inactiveBtnClass, rightBtnClasses + ' ' + activeBtnClass]
  : [leftBtnClasses + ' ' + activeBtnClass, rightBtnClasses + ' ' + inactiveBtnClass]

/**
 * @param {Object.<String, any>} evt
 */
afterNavigate(({ from }) => {
  const m = parseInt(from?.url.searchParams.get('m') || '1')

  if (Number.isNaN(m) || m !== 0)
    playMode = 1
})
</script>
