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
  <div class="flex flex-row items-center justify-center">
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
    <Button
      rounded={false}
      label="Online"
      class={playerCountBtnClasses[2]}
      on:click={setOnline}
    />
  </div>
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
  {#if isOnlineMode}
    <div class="flex flex-row items-center justify-center">
      <input
        bind:value={joinId}
        class="w-24 p-2 bg-gray-600 rounded-md text-gray-300 uppercase"
        placeholder="Room ID"
        maxlength="6"
      />
      <Button
        label="Join"
        class="font-bold text-primary"
        disabled={joinBtnDisabled}
        on:click={goToRoom}
      />
    </div>
  {/if}
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
import { playModes } from '$data/objects'
import { discordServerUrl, mainNameShort, repoPath } from '$data/strings'
import Button from '$ui/buttons/Button.svelte'
import { biGithub } from '$vendor/icons/bootstrap-icons'

const aboutLink = 'page/about'
const rulesLink = 'page/rules'
const btnClasses = 'bg-pink-400 hover:bg-pink-500 w-72 mx-auto text-2xl px-20 py-4 text-black rounded-xl transition-colors'
const activeBtnClass = ' border-b-2 border-primary text-white'
const inactiveBtnClass = ' text-gray-500'
const modeBtnClasses = 'py-1.5'
const leftBtnClasses = modeBtnClasses
const rightBtnClasses = modeBtnClasses
const footerLinkClasses = 'hover:underline'

/**
 * @type {Number}
 */
let playMode = playModes.AI

/**
 * @type {String}
 */
let joinId = ''

const buttons = allowedGridSizes.map((s) => {
  return {
    label: s + ' blocks',
    onclick: () => {
      let link = 'play?s=' + s

      if (playMode === playModes.FRIEND_ONLINE)
        link += '&m=' + playModes.FRIEND_ONLINE
      else if (playMode === playModes.FRIEND_LOCAL)
        link += '&m=' + playModes.FRIEND_LOCAL

      goto(link)
    }
  }
})

const set1Player = () => {
  playMode = playModes.AI
}

const set2Players = () => {
  playMode = playModes.FRIEND_LOCAL
}

const setOnline = () => {
  playMode = playModes.FRIEND_ONLINE
}

const goToRoom = () => {
  goto(import.meta.env.BASE_URL + '/play?room=' + encodeURIComponent(joinId))
}

$: playerCountBtnClasses = !playMode
  ? [leftBtnClasses + ' ' + activeBtnClass, modeBtnClasses + inactiveBtnClass, rightBtnClasses + ' ' + inactiveBtnClass]
  : (playMode === 1
    ? [leftBtnClasses + ' ' + inactiveBtnClass, modeBtnClasses + activeBtnClass, rightBtnClasses + ' ' + inactiveBtnClass]
    : [leftBtnClasses + ' ' + inactiveBtnClass, modeBtnClasses + inactiveBtnClass, rightBtnClasses + ' ' + activeBtnClass]
  )
$: isOnlineMode = playMode === playModes.FRIEND_ONLINE
$: joinBtnDisabled = joinId.length !== 6

/**
 * @param {Object.<String, any>} evt
 */
afterNavigate(({ from }) => {
  const m = parseInt(from?.url.searchParams.get('m') || String(playModes.AI))
  playMode = (Object.values(playModes).includes(m)) ? m : playModes.AI
})
</script>
