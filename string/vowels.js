const range = ["a", "e", "i", "o", "u"];

function vowels(str) {
  let count = 0;

  for (let ch of str.toLowerCase()) {
    if (range.includes(ch)) count++;
  }

  return count;
}

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
