const { buildStorage } = require("../models")

describe('Storage Unit Tests', () => {
  it('should instance is a singleton', done => {
    const storageA = buildStorage()
    const storageB = buildStorage()

    expect(storageA).toBe(storageB)
    done()
  })
  it('should persist data', done => {
    done()
  })
})