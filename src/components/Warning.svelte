<script>
  import { onMount } from 'svelte'

  let showWarning = false

  const sizeCheck = (e) => {
    showWarning = window.innerWidth < 450
  }

  onMount(() => {
    window.addEventListener('resize', sizeCheck)
    sizeCheck()
  })
</script>

{#if showWarning}
<div class="absolute table top-0 right-0 z-50 w-full h-screen bg-slate-dark opacity-75 animated fadeIn">
  <h1 class="table-cell text-5xl text-white text-center font-extrabold uppercase align-middle">
    <i class="fas fa-mobile-alt mr-2"></i> Best viewed in landscape mode.
  </h1>
</div>
{/if}
