function reverseInt(number) {
  const reversedNumber = number.toString().split('').reverse().join('')

  return Math.sign(number) * parseInt(reversedNumber)

}

console.log(reverseInt(15) === 51)
console.log(reverseInt(981) === 189)
console.log(reverseInt(500) === 5)
console.log(reverseInt(-15) === -51)
console.log(reverseInt(-90) === -9)