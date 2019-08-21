function isStringBalanced(string) {
  let number = 0;

  for (let ch of string) {
    if (ch === "(") {
      number++;
    } else if (ch === ")") {
      number--;
    }
  }

  return number === 0;
}

console.log(isStringBalanced('()'))
console.log(isStringBalanced('(a)'))
console.log(isStringBalanced('('))
console.log(isStringBalanced(')'))
console.log(isStringBalanced('())'))
console.log(isStringBalanced('(()'))
