<script>
  import { Router, Link, Route } from 'svelte-routing'

  import Profile from '../views/Profile.svelte'
  import Projects from '../views/Projects.svelte'
  import Resume from '../views/Resume.svelte'

  let url = ""
</script>

<div class="w-full h-screen p-24 bg-purple-500 relative">
  <h1 class="text-6xl">Carousel</h1>
  <Router url="{url}">
    <Route path="profile" component="{Profile}" />
    <Route path="projects" component="{Projects}" />
    <Route path="resume" component="{Resume}" />
    <Route path="/">
      <Profile />
    </Route>
    <div class="absolute bottom-0 p-12">
      <ul class="unstyled inline">
        <li class="inline-block pr-6">
          <Link to="/profile">Home</Link>
        </li>
        <li class="inline-block pr-6">
          <Link to="projects">Projects</Link>
        </li>
        <li class="inline-block">
          <Link to="resume">Resume</Link>
        </li>
      </ul>
    </div>
  </Router>
</div>
