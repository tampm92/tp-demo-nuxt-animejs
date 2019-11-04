
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/tp-100.jpg' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700g' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#42b883',
    height: '5px',
    duration: 10000
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/scss/global.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/anime.js',
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
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_mixins.scss',
    ]
  },
  manifest: {
    name: 'TP-Demo Nuxt-AnimeJs',
    short_name: 'TP',
    lang: 'en',
    description: 'TP-Demo Nuxt-AnimeJs-Tailwindcss',
    theme_color: '#188269',
    background_color: '#000',
    ogImage: `https://live.staticflickr.com/65535/48992121062_769c357412_o.png`
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    postcss: {
      plugins: {
        tailwindcss: {
          configPath: '~/tailwind.config.js',
          cssPath: '~/assets/scss/tailwind.scss'
        }
      },
    }
  }
}
