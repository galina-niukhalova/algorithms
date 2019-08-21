const { Stack } = require("./Stack");

function balancedBraces(string) {
  let stack = new Stack();
  const braces = new Map([["(", ")"], ["{", "}"], ["[", "]"]]);

  for (let ch of string) {
    if (braces.get(ch)) {
      stack.push(ch);
    } else {
      const lastBraces = stack.peek();
      if (braces.get(lastBraces) === ch) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !Boolean(stack.peek());
}

console.log(balancedBraces("[()]{}{[()()]()}"));
console.log(balancedBraces("[(])"));
