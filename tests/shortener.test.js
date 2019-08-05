const { Shortener } = require("../services")

describe('ShortURL Unit Tests', () => {
  it('should hash url', done => {
    const storage = {}
    const tinyHash = Shortener.createHash(storage, '12345', 'www.google.com', 'Cassiano')

    expect(tinyHash).toEqual({
      "hashDigest": "d2dcf8f5",
      "originalUrl": "www.google.com",
      "userName": "Cassiano"
    })
    done()
  })

  it('should delete hash url', done => {
    const storage = { "d2dcf8f5": {
      "hashDigest": "d2dcf8f5",
      "originalUrl": "www.google.com",
      "userName": "Cassiano"
    }}

    Shortener.deleteHashByHash(storage, null, "d2dcf8f5")
    expect(storage).toEqual({})

    done()
  })
})
