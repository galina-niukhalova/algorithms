function reverseString(string) {
  return string.split('').reverse().join('')
}

function reverseString2(string) {
  let result = ''
  
  for(let i=string.length-1; i>=0; i--) {
    result += string[i] 
  }

  return result
}

console.log(reverseString2('abc'))