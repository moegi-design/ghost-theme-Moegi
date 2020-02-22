import GhostContentAPI from '@tryghost/content-api'

const apiUrl = config.api.url || `${location.protocol}//${location.host}`
const key = config.api.contentKey

export default new GhostContentAPI({
  url: apiUrl || '',
  key: key || '',
  version: 'v3'
})