<script>
  import { onMount } from 'svelte'

  import Welcome from '../components/Welcome.svelte'
  import Announcement from '../components/Announcement.svelte'
  import Carousel from '../components/Carousel.svelte'
  import Contact from '../components/Contact.svelte'
  import Footer from '../components/Footer.svelte'

  let showWelcome = true

  onMount(() => {
    if (!!window.localStorage.getItem('hideWelcome'))
      showWelcome = false
  })
</script>

{#if showWelcome}
  <Welcome />
{/if}

<Announcement />
<div id="portfolioBody" class="flex flex-col h-full">
  <Carousel />
  <Contact />
  <Footer />
</div>
