<div id="welcome" class="fixed w-full h-screen p-12 bg-slate-dark z-20">
  <div>
    <button href="#"
          alt="Exit"
          class="fixed top-0 right-0 z-20 p-8 text-white hover:text-gray-500 transition transition-color animated fadeIn"
          on:click={ closeWelcome }>
      <span class="uppercase font-extrabold text-3xl md:text-5xl">x</span> <br />
      <span class="uppercase font-semibold text-xs md:text-md">( Esc )</span>
    </button>
  </div>
  <canvas id="scene" class="w-full opacity-0"></canvas>
  <div id="scene2" class="flex flex-grow flex-wrap mt-1/6 opacity-0">
    <div class="w-full md:w-1/2 mt-1/3 sm:mt-0 mb-10 md:mb-0">
      <div class="table m-0 md:m-auto">
        <a href="#"
          class="block text-white hover:text-gray-500 text-2xl md:text-3xl xl:text-5xl text-left md:text-center font-extrabold uppercase transition transition-all hover:underline"
          on:click={ closeWelcome }>
          Continue To Portfolio
        </a>
        <div class="pretty p-default mt-4">
          <input type="checkbox" bind:checked={ hideWelcome } />
          <div class="state">
            <label class="text-md md:text-xl text-white">
              <span class="uppercase font-extrabold">Never Show Again</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2">
      <a href="https://github.com/neetjn/"
         class="block text-white hover:text-gray-500 text-2xl md:text-5xl text-left md:text-center font-extrabold uppercase transition transition-all hover:underline"
         target="_blank">
       See My <i class="fa fa-code-branch"></i> Github
      </a>
    </div>
  </div>
</div>

<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  let hideWelcome = false

  // Color Palette: https://www.color-hex.com/color-palette/80926
  const particleColors = ['#e03e69','#20b3a2', '#657a87','#935f7b', '#b5c68a']

  class Particle {
    constructor(ctx, mouse, x, y, radius, ww, wh) {
      this.ctx = ctx
      this.mouse = mouse
      this.x =  Math.random() * ww
      this.y =  Math.random() * wh
      this.dest = {
        x : x,
        y: y
      }
      this.radius = radius
      this.r =  Math.random() * 5 + 2
      this.vx = (Math.random() - 0.5) * 20
      this.vy = (Math.random() - 0.5) * 20
      this.accX = 0
      this.accY = 0

      this.friction = Math.random() * 0.05 + 0.94

      // # TODO: update for dynamic list of colors
      this.color = particleColors[Math.floor(Math.random() * 6)]
    }

    render() {
      this.accX = (this.dest.x - this.x) / 500
      this.accY = (this.dest.y - this.y) / 500

      this.vx += this.accX
      this.vy += this.accY
      this.vx *= this.friction
      this.vy *= this.friction

      this.x += this.vx
      this.y +=  this.vy

      this.ctx.fillStyle = this.color
      this.ctx.beginPath()
      this.ctx.arc(this.x, this.y, this.r, Math.PI * 2, false)
      this.ctx.fill()

      const a = this.x - this.mouse.x
      const b = this.y - this.mouse.y

      const distance = Math.sqrt( a * a + b * b )

      if(distance < (this.radius * 70)){
        this.accX = (this.x - this.mouse.x) / 100
        this.accY = (this.y - this.mouse.y) / 100
        this.vx += this.accX
        this.vy += this.accY
      }
    }
  }

  const renderParticleText = (canvas, text, useMouse = false) => {
		let ctx = canvas.getContext('2d'),
        particles = [],
        amount = 0,
        mouse = {x: 0, y: 0},
        radius = 1;

    let ww = canvas.width = window.innerWidth
    let wh = canvas.height = window.innerHeight

    const onMouseClick = () => {
      radius++
      if(radius === 5){
        radius = 0
      }
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const onTouchMove = (e) => {
      if(e.touches.length > 0 ){
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY
      }
    }

    const onTouchEnd = (e) => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const draw = (target) => {
      ww = canvas.width = window.innerWidth
      wh = canvas.height = window.innerHeight

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.font = 'bold '+(ww/10)+'px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(target, ww / 2, wh / 2)

      const data  = ctx.getImageData(0, 0, ww, wh).data
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'screen'

      particles = []
      for(let i = 0; i < ww; i += Math.round(ww / 150)){
        for(let j = 0; j < wh; j += Math.round(ww / 150)){
          if(data[ ((i + j * ww) *4) + 3] > 150){
            particles.push(new Particle(ctx, mouse, i, j, radius, ww, wh))
          }
        }
      }
      amount = particles.length
    }

    const render = () => {
      requestAnimationFrame(render)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < amount; i++) {
        particles[i].render()
      }
    }

    window.addEventListener('resize', draw, text)

    if (useMouse) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('touchmove', onTouchMove)
      window.addEventListener('click', onMouseClick)
      window.addEventListener('touchend', onTouchEnd)
    }

    draw(text)
    requestAnimationFrame(render)

    return draw
  }

  const closeWelcome = (e) => {
    const container = document.querySelector('#welcome')
    const portfolioBody = document.querySelector('#portfolioBody')

    if (hideWelcome)
      window.localStorage.setItem('hideWelcome', true)

    anime({
      targets: container,
      opacity: 0,
      duration: 2000,
      easing: 'easeOutQuad',
      begin: (e) => {
        container.classList.toggle('hidden')
        anime({
          targets: portfolioBody,
          scale: 1,
          duration: 150,
          easing: 'easeInQuad',
          complete: (e) => {
            window.removeEventListener('keydown', closeWelcomeKey)
          }
        })
      }
    })
  }

  const closeWelcomeKey = (e) => {
    if (e.key == 'Escape')
      closeWelcome()
  }

  onMount(() => {
    const canvas = document.querySelector('#scene')
    const draw = renderParticleText(canvas, 'Welcome', true)

    const portfolioBody = document.querySelector('#portfolioBody')

    window.addEventListener('keydown', closeWelcomeKey)

    anime({
      targets: portfolioBody,
      scale: 0.85,
      duration: 150,
      easing: 'easeOutQuad',
      complete: (e) => {
        anime({
          targets: canvas,
          opacity: 1,
          duration: 8000,
          easing: 'easeInQuad',
          complete: (e) => {
            setTimeout(() => {
              anime({
                targets: canvas,
                opacity: 0,
                duration: 2000,
                easing: 'easeOutQuad',
                complete: (e) => {
                  canvas.classList.toggle('hidden')
                  anime({
                    targets: document.querySelector('#scene2'),
                    opacity: 1,
                    duration: 2000,
                    easing: 'easeInQuad'
                  })
                }
              })
            }, 4000)
          }
        })
      }
    })
  })
</script>
