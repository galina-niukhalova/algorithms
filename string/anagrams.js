function anagrams(stringA, stringB) {
  const mapA = convertStringToMap(stringA);
  const mapB = convertStringToMap(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for (let key of Object.keys(mapA)) {
    if (mapA[key] !== mapB[key]) {
      return false;
    }
  }

  return true;
}

function convertStringToMap(string) {
  const symbolsRegexp = new RegExp(/[a-z]/);
  const lowerCaseString = string.toLowerCase();
  const map = {};

  for (let ch of lowerCaseString) {
    if (ch.match(symbolsRegexp)) {
      !map[ch] ? (map[ch] = 1) : map[ch]++;
    }
  }

  return map;
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));
console.log(anagrams("a", "b"));
