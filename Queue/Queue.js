const _Node = require("./Node");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  };

  // Add to the back of the queue.
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    // Make the new node the last item on the queue
    this.last = node;
  };

  // Remove from the front of the queue.
  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

module.exports = Queue