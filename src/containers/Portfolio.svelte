<script>
  import { onMount } from 'svelte'

  import Welcome from '../components/Welcome.svelte'
  import Warning from '../components/Warning.svelte'
  import Announcement from '../components/Announcement.svelte'
  import Carousel from '../components/Carousel.svelte'
  import Contact from '../components/Contact.svelte'
  import Footer from '../components/Footer.svelte'

  let showWelcome = false

  onMount(() => {
    if (!!!window.localStorage.getItem('hideWelcome'))
      showWelcome = true
  })
</script>

{#if showWelcome}
  <Welcome />
{/if}

<Warning />
<Announcement />
<div id="portfolioBody" class="flex flex-col h-full">
  <Carousel />
  <Contact />
  <Footer />
</div>
