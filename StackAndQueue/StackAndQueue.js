let Stack1 = [];
let Stack2 = [];

enqueue = (data) => {
    return Stack1.push(data);
  }

dequeue = () => {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) {
      return console.log(`Stack1 is empty. Cannot dequeue.`)
    }
    while (Stack1.length > 0) {
      let popped = Stack1.pop();
      Stack2.push(popped);
    }
  }
  return Stack2.pop();
}

display1 = (index) => {
  if (!Stack1) {
    return console.log(`No nodes.`);
  }

  if (index) {
    return console.log(`At index ${index}: ${Stack1[index]}`);
  }

  if (!index) {
    return console.log(`Stack1: ${Stack1}.`)
  }
}

display2 = (index) => {
  if (!Stack2) {
    return console.log(`No nodes.`);
  }

  if (index) {
    return console.log(`At index ${index}: ${Stack2[index]}`);
  }

  if (!index) {
    return console.log(`Stack2: ${Stack2}.`)
  }
}

module.exports = { enqueue, dequeue, display1, display2 }