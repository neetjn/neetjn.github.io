
import Portfolio from './containers/Portfolio.svelte'

const app = new Portfolio({
  target: document.querySelector('#target')
})

window.app = app

export default app
