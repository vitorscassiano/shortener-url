const EventEmitter = require("events");

class Hello extends EventEmitter {
  registerA() {
    this.on('A', () => console.log('Foi no A'))
  }

  registerB() {
    this.on('B', () => console.log('Foi no B'))
  }

  send(key) {
    this.emit(key)
  }
}

const hello = new Hello()
hello.registerA()
hello.registerB()

hello.send('A')
hello.send('B')