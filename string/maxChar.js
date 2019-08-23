function maxChar(string) {
  const charMap = {}

  for(let ch of string) {
    charMap[ch] ? charMap[ch] ++ : charMap[ch] = 1
  }
  
  let maxChar, max = 0
  Object.keys(charMap).forEach(key => {
    if(charMap[key] > max) {
      max = charMap[key]
      maxChar = key
    }
  })

  return maxChar
}

console.log(maxChar('rrrvvvddddddent'))