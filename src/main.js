import App from './App.svelte'
import api from './api'

window.ghostAPI = api
const app = new App({
  target: document.body
})

export default app