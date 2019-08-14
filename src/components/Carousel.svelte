<script>
  import { Router, Route, Link } from '../../lib/svelte-routing'

  import Intro from '../views/Intro.svelte'
  import Skills from '../views/Skills.svelte'
  import Projects from '../views/Projects.svelte'
  import Resume from '../views/Resume.svelte'

  const Routes = [
    {
      route: 'intro',
      component: Intro,
      active: false
    },
    {
      route: 'skills',
      component: Skills,
      active: false,
    },
    {
      route: 'projects',
      component: Projects,
      active: false
    },
    {
      route: 'resume',
      component: Resume,
      active: false
    },
  ]

  // shim for forced view update
  // TODO: properly set default route
  let activeRoute = Routes[0].route

  const toggleRoute = (route) => {
    if (!route.active) {
      Routes.filter(r => r.active).forEach(r => r.active = false)
      route.active = true
      // shim for forced view update
      activeRoute = route.route
    }
  }
</script>

<div class="w-full h-screen relative">
  <Router basepath="#" hash="{true}">
    <Route path="intro" component="{Intro}" />
    <Route path="skills" component="{Skills}" />
    <Route path="projects" component="{Projects}" />
    <Route path="resume" component="{Resume}" />
    <Route path="">
      <Intro />
    </Route>
    <div class="absolute top-1/3 ml-8">
      <ul class="table unstyled text-3xl md:text-5xl text-white">
        {#each Routes as route, i}
        <li class="pb-2 md:pb-6" style="{ activeRoute == route.route ? 'opacity: 0.40' : 'opacity: 0.50' };">
          <Link to="{route.route}" on:click={ e => toggleRoute(route) }>
            <i class="shadow-md animated fadeIn fas { activeRoute == route.route ? 'fa-bullseye' : 'fa-circle' }"></i>
          </Link>
        </li>
        {/each}
      </ul>
    </div>
  </Router>
</div>
