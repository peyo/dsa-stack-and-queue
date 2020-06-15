const { enqueue, dequeue, display1, display2 } = require("./StackAndQueue")

main = () => {

  enqueue(1);
  enqueue(2);
  enqueue(3);
  display1();
  dequeue();
  display2();

}

console.log(main());