<div class="h-full flex flex-col justify-center">
  <div class="flex flex-row justify-center items-center gap-4 pt-3 text-gray-300">
    <Button
      href={rulesPath}
      label="Rules"
      title="Visit the details rules page"
      class={sublinkPassiveClasses}
      dense
      rounded={false}
    />
    <Button
      href={aboutPath}
      label="About"
      title="Visit About us section with details on Service and Privacy aspects"
      class={sublinkPassiveClasses}
      rounded={false}
      dense
    />
    <Button
      href={repoPath}
      title="Visit the project's Github repository"
      class={sublinkPassiveClasses}
      rounded={false}
      icon={biGithub}
      iconClass="h-5 h-5"
      target="_blank"
    />
    <Button
      href={discordPath}
      title="Visit the project's Discord server"
      class={sublinkPassiveClasses}
      rounded={false}
      icon={biDiscord}
      iconClass="h-5 h-5"
      target="_blank"
    />
  </div>
  <h1 class="text-center my-10">
    <span class="inline-block pb-2 text-3xl font-bold">
      <span class="text-indigo-400">Quin</span><span class="text-pink-400">que</span>
    </span>
    <span class="block text-faded sm:text-lg">[ {mainDescription} ]</span>
  </h1>
  <div class="flex-1 flex flex-col justify-center">
    <p class="text-primary text-center text-xl font-bold">Play</p>
    <div class="flex flex-row items-center justify-center">
      <Button
        rounded={false}
        label="Computer"
        title="Play against the computer"
        class={playerCountBtnClasses[0]}
        on:click={set1Player}
      />
      <Button
        rounded={false}
        label="2 players"
        title="Play against a friend locally"
        class={playerCountBtnClasses[1]}
        on:click={set2Players}
      />
      <Button
        rounded={false}
        label="Online"
        title="Play against a friend online"
        class={playerCountBtnClasses[2]}
        on:click={setOnline}
      />
    </div>
    <div class="flex flex-col gap-8 py-6 relative">
      {#if isOnlineMode}
        <p transition:fade|global={transitionParamsStandard} class="absolute -top-0.5 left-0 text-faded w-full text-center">Host</p>
      {/if}
      {#each buttons as { label, onclick }}
        <Button
          {label}
          title={'Start the game with the size of ' + label}
          dense
          rounded={false}
          class={btnClasses}
          on:click={onclick}
        />
      {/each}
    </div>
    <div class="h-40">
      {#if isOnlineMode}
        <div transition:fade|global={transitionParamsStandard}>
          <p class="text-faded text-center pb-1">Join</p>
          <div class="flex flex-row items-center justify-center">
            <input
              bind:value={joinId}
              class="w-24 h-12 p-2 bg-gray-600 rounded-l-md text-gray-300 uppercase"
              placeholder="Room ID"
              maxlength="6"
            />
            <Button
              label="Join"
              class="text-white bg-primary rounded-r-md"
              rounded={false}
              disabled={joinBtnDisabled}
              on:click={goToRoom}
            />
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
<script>
import { afterNavigate, goto } from '$app/navigation'
import { allowedGridSizes } from '$data/arrays'
import { playModes, transitionParamsStandard } from '$data/objects'
import { aboutPath, discordPath, mainDescription, repoPath, rulesPath } from '$data/strings'
import Button from '$ui/buttons/Button.svelte'
import { sublinkPassiveClasses } from '$utils/dom'
import { getPath } from '$utils/generators'
import { biDiscord, biGithub } from '$vendor/icons/bootstrap-icons'
import { fade } from 'svelte/transition'

const btnClasses = 'bg-primary bg-opacity-80 hover:bg-opacity-100 w-72 mx-auto text-2xl px-20 py-4 text-black rounded-full transition-colors'
const activeBtnClass = ' border-b-2 border-primary text-gray-100'
const inactiveBtnClass = ' text-gray-500 hover:text-gray-100'
const modeBtnClasses = 'py-1.5'
const leftBtnClasses = modeBtnClasses
const rightBtnClasses = modeBtnClasses

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
      let link = '/play?s=' + s

      if (isOnlineMode)
        link += '&m=' + playModes.FRIEND_ONLINE
      else if (isFriendLocalMode)
        link += '&m=' + playModes.FRIEND_LOCAL

      goto(getPath(link))
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
  goto(
    getPath('/play?room=' + encodeURIComponent(joinId.toUpperCase()))
  )
}

$: playerCountBtnClasses = !playMode
  ? [leftBtnClasses + ' ' + activeBtnClass, modeBtnClasses + inactiveBtnClass, rightBtnClasses + ' ' + inactiveBtnClass]
  : (playMode === 1
    ? [leftBtnClasses + ' ' + inactiveBtnClass, modeBtnClasses + activeBtnClass, rightBtnClasses + ' ' + inactiveBtnClass]
    : [leftBtnClasses + ' ' + inactiveBtnClass, modeBtnClasses + inactiveBtnClass, rightBtnClasses + ' ' + activeBtnClass]
  )
$: isOnlineMode = playMode === playModes.FRIEND_ONLINE
$: isFriendLocalMode = playMode === playModes.FRIEND_LOCAL
$: joinBtnDisabled = joinId.length !== 6

/**
 * @param {Object.<String, any>} evt
 */
afterNavigate(({ from }) => {
  const m = parseInt(from?.url.searchParams.get('m') || String(playModes.AI))
  playMode = (Object.values(playModes).includes(m)) ? m : playModes.AI
})
</script>
