const { Shortener } = require('../services')
const { buildStorage } = require('../models')

const router = require('express').Router()

router.get('/', (request, response, next) => {
  return response.json({ status: 200, message: 'Everything is ok' })
})

router.post('/generate', async (request, response, next) => {
  const { url } = request.body
  const storage = buildStorage()
  const hash = await Shortener.createHash(storage, null, url, null)

  return response.json(hash)
})

router.get('/all', async(request, response, next) => {
  const storage = buildStorage()
  const all = await Shortener.findAll(storage, null)

  return response.json(all)
})

module.exports = router