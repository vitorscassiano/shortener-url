const { buildStorage } = require("../models")

describe('Storage Unit Tests', () => {
  it('should instance is a singleton', done => {
    const storageA = buildStorage()
    const storageB = buildStorage()

    expect(storageA).toBe(storageB)
    done()
  })

  xit('should persist data', async done => {
    const storage = {
      save: async ({ hashDigest, originalURL, accountId }) => {
        return Promise.resolve({
          originalUrl: 'google.com',
          accountId: 123,
          hashDigest: '47a0938d'
        })
      }
    }

    const rows = await storage.save({
      hashDigest: 'qwe123',
      originalURL: 'google.com'
    })

    expect(rows).toEqual({ originalUrl: 'google.com', accountId: 123, hashDigest: '47a0938d' })
    done()
  })

  xit('should get the persisted data', async done => {
    const storage = {
      find: async (key) => {
        return Promise.resolve({
          originalUrl: 'google.com',
          accountId: 123,
          hashDigest: '47a0938d'
        })
      }
    }
    await storage.find('some-key', 'some-value')
    const value = await storage.get('some-key')

    expect(value).toEqual('some-value')
    done()
  })
})