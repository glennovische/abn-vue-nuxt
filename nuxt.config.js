export default {
  mode: 'spa',
  /*
   ** Spa can not be build, Universal outputs console errors.
   */
  srcDir: __dirname,
  buildDir: '.nuxt',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#39b982' },
  /*
   ** Global CSS
   */
  css: ['~/assets/_emerald_variables.scss', '~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins//slide-menu', ssr: false },
    { src: '~plugins//emerald' },
    { src: '~plugins/main' },
    { src: '~plugins/vue-slider' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@cknow/nuxt-modular'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        components: {
          default: resolve(__dirname, 'pages/index') // or routes[index].component
        }
      })
    }
  }
}
