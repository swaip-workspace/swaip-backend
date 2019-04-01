const feathers = require('@feathersjs/feathers')
const serverless = require('feathersjs-serverless')

const Todos = {
  find: async () => ([{
    description: 'Build a nice application'
  }, {
    description: 'Deploy it using Serverless'
  }])
}

const app = serverless(feathers())
  .use('todos', Todos)
 
module.exports.handler = app.handler()
