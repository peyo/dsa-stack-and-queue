// Extension, extension exercise

const ParenthesesStack = require("./ParenthesesStack");

matchingParentheses = (exp) => {
  let stack = new ParenthesesStack();

  if (exp[0] === '"' || exp[0] === "'") {
    stack.push(exp[0]);
    matchingQuotesEnd(stack, exp);
    return;
  }

  if (exp[0] !== '"' || exp[0] !== "'") {
    let n = exp.length;

    for (let i = 0; i < n; i++) {
      if (exp[i] === "(" || exp[i] === "{" || exp[i] === "[") {
        stack.push(exp[i]);
      } else if (exp[i] === ")" || exp[i] === "}" || exp[i] === "]") {
        if (
          stack === null ||
          (exp[i] === ")" && stack.top.data !== "(") ||
          (exp[i] === "}" && stack.top.data !== "{") ||
          (exp[i] === "]" && stack.top.data !== "[")
        ) {
          return console.log(`Not balanced.`)
        }
      } else {
        stack.pop();
      }
    }

    return console.log(`Om. Balanced!`)
  }
};

matchingQuotesEnd = (stack, exp) => {
  let n = exp.length - 1;
  if (
    (exp[n] === '"' && stack.top.data === '"') ||
    (exp[n] === "'" && stack.top.data === "'")
  ) {
    console.log(`Om. Balanced!`);
  } else {
    console.log(`Not balanced.`);
  }
};

module.exports = { matchingParentheses };
