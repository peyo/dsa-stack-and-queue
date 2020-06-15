peek = (stack) => {
  let node = stack.top;
  console.log(`Top of the stack: ${node.data}`);
  return;
}

isEmpty = (stack) => {
  let node = stack.top;
  
  if (!node) {
    console.log(`Stack is empty.`);
  }

  if (node) {
    console.log(`Stack is not empty`);
  }
}

display = (stack, index) => {
  let node = stack.top;

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

  return console.log(`At index ${index}: ${arr[index]}`);
}

remove = (stack, data) => {
  let node = stack.top;

  let arr = [];
  while (node) {
    if (node) {
      arr.push(node.data);
      node = node.next;
    } else {
      arr.push(node.data);
    }
  }

  let newArr = arr.filter(j => j !== data);
  console.log(newArr);
}

module.exports = { peek, isEmpty, display, remove }