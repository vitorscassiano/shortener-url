const EventEmitter = require("events");

module.exports = class Hello extends EventEmitter {
  registerA() {
    this.on('A', () => console.log('Foi no A'))
  }

  registerB() {
    this.on('B', () => console.log('Foi no B'))
  }

  send(key) {
    console.log()
    this.emit(key)
  }
}