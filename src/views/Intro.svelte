<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'
  import particles from 'particlesjs'

  import Picture from '../assets/images/picture.jpg'
  import Background from '../assets/images/welcome-bg.jpg'

  onMount(() => {
    anime({
      targets: document.querySelector('i.fa.fa-arrow-right.ml-4'),
      translateX: [0, 4, 0],
      duration: 2000,
      easing: 'easeInOutQuad',
      finishDelay: 1000,
      loop: true
    })
    anime({
      targets: document.querySelectorAll('span#period'),
      opacity: [1, 0, 1],
      duration: 4000,
      easing: 'easeInOutQuad',
      loop: true
    })
    particles.init({
      selector: 'canvas#twinkle',
      color: '#fff',
      connectParticles: false,
      responsive: false
    })
  })
</script>

<div class="w-full h-screen bg-red-400 text-center text-white animated fadeIn">
  <img alt=""
       class="absolute top-0 right-0 w-full h-full"
       style="background: url({Background}) no-repeat;
              background-size: cover;
              background-position: 100% 25%;
              opacity: 0.75;" />
  <canvas id="twinkle"
          class="absolute top-0 right-0 w-full h-screen z-10"></canvas>
  <!-- TODO: align profile image/content -->>
  <div class="relative z-20">
    <img alt=""
         src="{Picture}"
         class="hidden md:block m-auto mb-4 w-1/4 h-auto rounded-full p-1 bg-red-500 shadow-md" />
    <h1 class="text-5xl font-extrabold">
      I'm <span class="text-red-500">John</span><span id="period">.</span>
    </h1>
    <h1 class="text-2xl mb-8 font-semibold uppercase">
      I'm a full stack software engineer.
    </h1>
    <button class="text-xl font-bold uppercase p-4 border-4 border-red-500 hover:border-red-400 hover:underline hover:text-red-500 transition transition-color">
      Check out my skills <i class="fa fa-arrow-right ml-4"></i>
    </button>
  </div>
</div>
