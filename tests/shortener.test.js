const { Shortener } = require("../services")

describe('ShortURL Unit Tests', () => {
  it('should hash url', done => {
    const storage = {
      save: async ({ hashDigest, originalURL, accountId }) => {
        return Promise.resolve({
          originalUrl: 'www.google.com',
          accountId: 123,
          hashDigest: '47a0938d'
        })
      }
    }
    const tinyHash = Shortener.createHash(storage, '12345', 'www.google.com', 123)

    expect(tinyHash).toEqual({
      "hashDigest": "d2dcf8f5",
      "originalUrl": "www.google.com",
      "accountId": 123
    })
    done()
  })

  xit('should delete hash url', async done => {
    const storage = {
      delete: async (hash) => Promise.resolve()
    }

    await Shortener.deleteByHash(storage, null, "d2dcf8f5")
    expect(storage).toEqual({})

    done()
  })
})
