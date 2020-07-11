import GhostContentAPI from '@tryghost/content-api'

const apiUrl = config.api.url || `${location.protocol}//${location.host}`
const key = config.api.contentKey

export const siteConfig = {
  api: {
    url: apiUrl,
    contentKey: key,
  },
  primaryColor: config.primaryColor || '#86B81B',
  feed: config.feed || 'Pure',
  darkMode: config.darkMode || 'auto',
}

export default new GhostContentAPI({
  url: apiUrl || '',
  key: key || '',
  version: 'v3'
})