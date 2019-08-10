const expressLoaders = require('./expressLoaders')

module.exports = {
  init: async(app) => {
    await expressLoaders(app)

    return app
  }
}