peek = (stack) => {
  let node = stack.first;
  console.log(`First in queue: ${node.data}`);
  return;
};

isEmpty = (stack) => {
  let node = stack.first;

  if (!node) {
    console.log(`Stack is empty.`);
  }

  if (node) {
    console.log(`Stack is not empty`);
  }
};

display = (stack, index) => {
  let node = stack.first;

  if (!node) {
    return console.log(`No nodes.`);
  }

  let arr = [];
  while (node) {
    if (node) {
      arr.push(node.data);
      node = node.next;
    } else {
      arr.push(node.data);
    }
  }

  if (index) {
    return console.log(`At index ${index}: ${arr[index]}`);
  }

  if (!index) {
    return console.log(arr)
  }
}

module.exports = { peek, isEmpty, display };
