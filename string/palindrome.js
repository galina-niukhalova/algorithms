function reverse(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

function palindrome(string) {
  return string === reverse(string);
}

function palindrome2(string) {
  for (let i = 0, j = string.length - 1; i < string.length / 2; i++, j--) {
    if (string[i] !== string[j]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome2("raar"));
console.log(palindrome2("rara"));
