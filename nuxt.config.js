require('dotenv').config()
const config = require('./config.json')

const title = process.env.TITLE ? process.env.TITLE : config.title;
const description = process.env.DESCRIPTION ? process.env.DESCRIPTION : config.description;
const gh_repo_name = process.env.GH_REPO_NAME ? process.env.GH_REPO_NAME : config.gh_repo_name;
const latitude = process.env.LATITUDE ? process.env.LATITUDE : config.location.latitude;
const longitude = process.env.LONGITUDE ? process.env.LONGITUDE : config.location.longitude;


module.exports = {
  mode: 'universal',
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/' + gh_repo_name + '/' : ''
  },
  /*
  ** Headers of the page
  */
  head: {
    title: title + ' Shop - Open Marketplace Application}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    'nuxt-leaflet',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'de',
        name: 'Deutsch'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./translations/en.js'),
        de: require('./translations/de.js')
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  env: {
    shopUrl: process.env.URL || 'http://localhost:5000',
    title: title,
    shopDescription: description,
    heroImageUrl: process.env.HERO_IMGAE_URL || '',
    shopLatitude: latitude,
    shopLongitude: longitude,
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
