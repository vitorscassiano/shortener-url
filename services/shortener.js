const crypto = require('crypto')
const hash = crypto.createHash('sha256')

class Shortener {
  constructor(storage) {
    this.storage = storage
  }

  createHash(apiDevKey, originalUrl, userName) {
    const hashDigest = hash.update(originalUrl).digest('hex').slice(-8)
    const properties = { originalUrl, userName, hashDigest }

    this.storage[hashDigest] = properties

    return properties 
  }

  deleteHashByHash(apiDevKey, hash) {
    delete this.storage[hash]
  }

  deleteHashByURL(apiDevKey, shortUrl) {

  }
}

module.exports = Shortener