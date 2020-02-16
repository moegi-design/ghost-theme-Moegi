import App from './App.svelte'
import GhostContentAPI from '@tryghost/content-api'

window.ghostAPI = new GhostContentAPI({
  url: `${location.protocol}//${location.host}`,
  key: contentKey,
  version: 'v3'
})
const app = new App({
  target: document.body
})

export default app