const crypto = require('crypto')
const hash = crypto.createHash('sha256')

class Shortener {
  static createHash(storage, apiDevKey, originalUrl, userName) {
    const hashDigest = hash.update(originalUrl).digest('hex').slice(-8)
    const properties = { originalUrl, userName, hashDigest }

    storage[hashDigest] = properties

    return properties
  }

  static deleteHashByHash(storage, apiDevKey, hash) {
    delete storage[hash]
  }

  static deleteHashByURL(storage, apiDevKey, shortUrl) { }
}

module.exports = Shortener