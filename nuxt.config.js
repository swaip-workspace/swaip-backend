const pkg = require('./package')
const path = require('path');
const axios = require('axios');
//const { generateRoutes } = require('./config/router');
const isGenerate = process.argv[process.argv.length -1] == 'generate';
const _ = require('lodash');

module.exports = {
  mode: 'universal',
  srcDir:'client/',

  env:{
    NODE_ENV:process.env.NODE_ENV
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000000' },

  /*
  ** Global CSS
  */
  css: [
    { src:'~/assets/scss/styles.scss'}
  ],

  /* Middleware */
  router: {

    base: '',

    /*extendRoutes (routes) {
      const newRoutes = generateRoutes(routes)
      routes.splice(0, routes.length)
      routes.unshift(...newRoutes)
    }*/
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src:'~/plugins/netlify', ssr:false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', {
      manifest:{
        display:'fullscreen'
      }
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
