class Storage {
  constructor(pg) {
    this.client = {}
  }

  set(key, value) {
    this.client[key] = value
  }

  get(key) {
    return this.client[key]
  }
}

function buildStorage() {
  if (!Storage.instance) {
    Storage.instance = new Storage();
  }

  return Storage.instance;
}

module.exports = buildStorage 