const _Node = require("./Node");

class Ophidian {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    let random = Math.random();
    if (random < .25) {
      this.dequeue1();
    } else { 
      this.dequeue2();
    }
  }

  dequeue1() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      return;
    }

    this.enqueue(node.data);
  };

  dequeue2() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.data;
  }
}

module.exports = Ophidian;
