<script>
  import Picture from '../assets/images/picture.jpg'

  const profileData = [
    ['Years Experience', '4+'],
    ['Focus', 'Frontend, Distributed Systems'],
    ['Education', 'Informal'],
    ['Languages', 'English, Spanish'],
    ['Location', 'New Hampshire'],
    ['Looking For Work', 'Yes'],
    ['Willing To Relocate', 'Yes'],
  ]

  let code = [
    'const John = new User(\'John Wayne Nolette\', \'Software Engineer\');',
    'console.log(John.hobbies())'
  ]
</script>

<div class="w-full h-screen overflow-hidden p-12 pt-24 md:p-24 bg-red-500 animated fadeIn">
  <div class="flex flex-grow flex-wrap max-w-xl m-auto">
    <div class="w-full">
      <div class="bg-red-400 p-4 border-red-500 border-8 border-dashed text-white">
        <img alt="John Nolette"
             src="{ Picture }"
             class="block m-auto h-auto w-1/2 mb-4 rounded-full p-1 bg-white shadow-lg animated zoomIn" />
        <h1 class="text-center text-2xl uppercase font-extrabold">John Nolette</h1>
        <h1 class="text-center text-sm uppercase font-semibold mb-4">Software Engineer</h1>
        <div class="flex flex-grow flex-wrap p-4 uppercase font-semibold text-sm md:text-md">
          {#each profileData as entry, i}
          <div class="w-1/2">
            <h2 class="text-left underline">{ entry[0] }:</h2>
          </div>
          <div class="w-1/2 mb-2">
            <h2 class="text-left md:text-right font-extrabold">{ entry[1] }</h2>
          </div>
          <div class="w-full hidden sm:block mt-2 mb-2 p-1 bg-red-700"></div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
