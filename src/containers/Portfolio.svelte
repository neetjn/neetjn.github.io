<script>
  import Welcome from '../components/Welcome.svelte'
  import Announcement from '../components/Announcement.svelte'
  import Carousel from '../components/Carousel.svelte'
  import Contact from '../components/Contact.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<Welcome />
<Announcement />
<div class="flex flex-col h-full">
  <Carousel />
  <Contact />
  <Footer />
</div>
