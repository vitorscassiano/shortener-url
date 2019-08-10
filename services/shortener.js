const crypto = require('crypto')
const hash = crypto.createHash('sha256')

class Shortener {
  static async createHash(storage, apiDevKey, originalUrl, accountId) {
    console.info({ originalUrl, accountId })
    const hashDigest = hash.update(originalUrl).digest('hex').slice(-8)
    const properties = {
      originalUrl,
      accountId,
      hashDigest
    }
    await storage.save(properties)

    return properties
  }

  static async findAll(storage, apiDevKey) {
    const all = await storage.findAll()

    return all
  }

  static async findURL(storage, apiDevKey, hash) {
    const properties = await storage.find(hash)

    return properties
  }

  static async deleteByHash(storage, apiDevKey, hash) {
    await storage.delete(hash)
  }

  static deleteHashByURL(storage, apiDevKey, shortUrl) { }
}

module.exports = Shortener