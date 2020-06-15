const starTrek = require("./Stack");
const {
  peek,
  isEmpty,
  display,
  remove
} = require("./Helper")
const { matchingParentheses } = require("./MatchingParentheses")

main = () => {
  //let stack = new starTrek();

  //stack.push("Kirk");
  //stack.push("Spock");
  //stack.push("McCoy");
  //stack.push("Scotty");
  
  // Helper
  //peek(stack);
  //isEmpty(stack);
  //display(stack, 2);
  //remove(stack, "McCoy")

  // Matching Parentheses
  const exp = ["{", "(", ")", "]"]
  matchingParentheses(exp);

  //return stack
}

console.log(main());

module.export = main;