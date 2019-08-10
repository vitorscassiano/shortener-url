const express = require('express')
const loaders = require('./loaders')

const { tiny } = require('./api/index')

const startServer = async() => {
  const app = express()
  await loaders.init(app)

  app.use(tiny)

  app.listen(8080, console.log('The server was up!'))
}

startServer()