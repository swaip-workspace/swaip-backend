'use strict'
const path = require('path')
const consola = require('consola')
const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')

process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config/')




async function start() {
  const app = express(feathers())
  const configuration = require('@feathersjs/configuration')
  app.configure(configuration())


  const host = app.get('host')
  const port = app.get('port')



  const { Nuxt, Builder } = require('nuxt')

  // Setup nuxt.js
  const config = require('../nuxt.config.js')
  config.rootDir = path.resolve(__dirname, '..')
  config.dev = process.env.NODE_ENV !== 'production'

  const nuxt = new Nuxt(config)
  if (config.dev) {
    /*const devProxy = {
      '/.netlify': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/.netlify/functions': '' }
      }
    };
    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(devProxy).forEach(function(context) {
      app.use(proxyMiddleware(context, devProxy[context]));
    });*/

    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(nuxt.render)

  app.listen(port)

  consola.ready({
    message: `Feathers application started on ${host}:${port}`,
    badge: true
  })
}

start()
