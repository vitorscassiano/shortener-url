const { Shortener } = require("./services")
const { buildStorage } = require("./models")

const storage = buildStorage()
const hash = Shortener.createHash(storage, null, 'https://google.com', 'Vitor Cassiano')

console.log(hash)
