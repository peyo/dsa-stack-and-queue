const Queue = require("./Queue");
const {
  peek,
  isEmpty,
  display
} = require("./Helper");

main = () => {
  let queue = new Queue();

  queue.enqueue("Kirk");
  queue.enqueue("Spock");
  queue.enqueue("Uhura");
  queue.enqueue("Sulu");
  queue.enqueue("Checkov");
  //peek(queue);
  //isEmpty(queue);
  //display(queue, 2);
  queue.dequeue();
  queue.dequeue();
  display(queue);

  return queue
}

console.log(main());

module.export = main;