<script>
  import { Router, Route, Link, link } from '../../lib/svelte-routing'

  import Profile from '../views/Profile.svelte'
  import Projects from '../views/Projects.svelte'
  import Resume from '../views/Resume.svelte'

  const Routes = [
    {
      route: 'profile',
      component: Profile,
      active: false
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
    <Route path="profile" component="{Profile}" />
    <Route path="projects" component="{Projects}" />
    <Route path="resume" component="{Resume}" />
    <Route path="">
      <Profile />
    </Route>
    <div class="absolute bottom-0 pb-12 w-full">
      <ul class="table m-auto unstyled text-5xl text-white">
        {#each Routes as route, i}
        <li class="inline-block pr-6">
          <Link to="{route.route}" on:click={ e => toggleRoute(route) }>
            <i class="animated fadeIn fas { activeRoute == route.route ? 'fa-bullseye' : 'fa-circle' }"></i>
          </Link>
        </li>
        {/each}
      </ul>
    </div>
  </Router>
</div>
