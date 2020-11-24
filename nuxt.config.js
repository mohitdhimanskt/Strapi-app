require("dotenv").config();
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-auths',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
     // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
 '@nuxtjs/bulma',
 // Doc: https://axios.nuxtjs.org/usage
 '@nuxtjs/axios',
 // Doc: https://github.com/nuxt-community/dotenv-module
 '@nuxtjs/dotenv',
 '@nuxtjs/auth'
  ],
 /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_AUTH_URL
  },
  /*
 ** Auth module configuration
 ** See https://auth.nuxtjs.org/schemes/local.html#options
 */
auth: {
  strategies: {
  local: {
  endpoints: {
  login: {
  url: 'auth/local',
  method: 'post',
  propertyName: 'jwt'
  },
  user: {
  url: 'users/me',
  method: 'get',
  propertyName: false
  },
  logout: false
  }
  }
  }
 },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
