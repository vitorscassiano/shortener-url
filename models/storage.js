const { Pool } = require('pg')

class Storage {
  constructor() {
    this.client = new Pool({
      user: 'shortener',
      host: 'localhost',
      database: 'shortener',
      password: 'shortener',
      port: 5432
    })
  }

  async save(properties) {
    const { hashDigest, originalURL, accountId } = properties

    try {
      const { rows } = this.client.query(
        `INSERT INTO url (
          hash,
          original_url,
          account_id
        ) VALUES (
          $1::varchar,
          $2::varchar,
          $3::bigint
        )`,
        [
          hashDigest,
          originalURL,
          accountId
        ]
      )

      return rows
    } catch (err) {
      const { message, stack } = err
      console.error({ message, stack })

      throw err
    }
  }

  async find(key) {
    try {
      const { rows } = await this.client.query(
        'SELECT * FROM url WHERE hash = $1::text',
        [key]
      )

      return rows
    } catch (err) {
      const { message, stack } = err
      console.error({ message, stack })

      throw err
    }
  }

  async findAll() {
    try {
      const { rows } = await this.client.query('SELECT * FROM url')

      return rows
    } catch (err) {
      throw err
    }
  }

  async delete(hash) {
    try {
      const { rows } = await this.client.query(
        'DELETE FROM url WHERE hash = $1::text',
        [hash]
      )

      return rows
    } catch (err) {
      const { message, stack } = err
      console.error({ message, stack })

      throw err
    }
  }
}

function buildStorage() {
  if (!Storage.instance)
    Storage.instance = new Storage();

  return Storage.instance;
}

module.exports = buildStorage 