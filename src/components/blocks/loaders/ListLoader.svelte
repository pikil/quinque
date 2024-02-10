<span class={classes}>
  <div class="flex flex-col justify-center items-center">
    <div class="lds-ellipsis relative h-10 w-[76px] flex flex-row items-center">
      {#each { length: 4 } as num}
        <div data-attr={num} />
      {/each}
    </div>
  </div>
  {#if label}
    <p class="text-faded text-sm">{label}</p>
  {/if}
</span>
<script>
/**
 * @type {String}
 */
export let label = ''

$: classes = '-translate-x-1/4'
  + ($$props.class ? ' ' + $$props.class : '')
</script>
<style>
.lds-ellipsis div {
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: lightgray;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(24px, 0);
  }
}
</style>
