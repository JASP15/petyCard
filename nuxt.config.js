export default {
 
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Petycard',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'jasp1593@gmail.com',
      },
      smtp: {
        
        auth: {
          user: 'soporte@moldimaq.com',
          pass: '1q2w3e4r5t',
        },
        host: "smtp.titan.email",
        port: 465,
        secure: true,
      },
    }],
],
mail: {
  message: {
    to: 'jasp1593@gmail.com',
  },
  smtp: {
    host: "smtp.titan.email",
    port: 465,
    secure: true,
  },
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
}
