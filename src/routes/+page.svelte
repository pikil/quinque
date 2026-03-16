<div class="h-full flex flex-col justify-center gap-8 items-center transition">
  <div>
    <h1 class="text-center">
      <span class="inline-block pt-2 text-3xl font-bold">
        <span class="text-color1">Quin</span><span class="text-color2">que</span>
      </span>
    </h1>
  </div>
  <div class="flex flex-row justify-center items-center gap-6 text-gray-300 pb-4">
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
  {#each mainButtons as { label, href }}
    <Button
      {href}
      {label}
      rounded={false}
      class={mainBtnClasses}
    />
  {/each}
</div>
<script>
import { aboutPath, discordPath, repoPath, rulesPath } from '$data/strings'
import { getPath } from '$utils/generators'
import { headerTitle } from '$stores/layout-store'
import Button from '$ui/buttons/Button.svelte'
import { mainBtnClasses, sublinkPassiveClasses } from '$utils/dom'
import { biDiscord, biGithub } from '$vendor/icons/bootstrap-icons'

const mainButtons = [
  {
    label: '1 player',
    href: getPath('/single')
  }
]

mainButtons.push(
  {
    label: '2 players',
    href: getPath('/two-players')
  },
  {
    label: 'Online',
    href: getPath('/online')
  }
)

$headerTitle = null

</script>
