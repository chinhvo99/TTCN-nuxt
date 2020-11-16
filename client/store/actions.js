import { authMutations } from './auth/mutations'

const cookieparser = process.server ? require('cookieparser') : undefined
export default {
  // This will run first when nuxt app init
  // Called manually in middleware in SPA mode
  /**
   * Run as a middleware, used in nuxt.config.js as the first global middleware
   * therefore, this action will run first
   * @param {Object} context Vuex default action's first parameter
   * @returns {void} Return nothing
   */
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    // Since we don't have localStorage in server side, we gotta use cookie instead
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit(authMutations.SET.AUTH, auth)
  },
}
