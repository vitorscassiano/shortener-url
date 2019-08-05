const Shortener = require("../services/shortener")

describe('ShortURL Unit Tests', () => {
  it('should hash url', done => {
    const map = {}
    const shortner = new Shortener(map)
    const tinyHash = shortner.createHash('12345', 'www.google.com', 'Cassiano')

    expect(tinyHash).toEqual({
      "hashDigest": "d2dcf8f5",
      "originalUrl": "www.google.com",
      "userName": "Cassiano"
    })
    done()
  })

  it('should delete hash url', done => {
    const map = { "d2dcf8f5": {
      "hashDigest": "d2dcf8f5",
      "originalUrl": "www.google.com",
      "userName": "Cassiano"
    }}

    const shortener = new Shortener(map)
    shortener.deleteHashByHash("d2dcf8f5")
    expect(map).toEqual({})

    done()
  })
})