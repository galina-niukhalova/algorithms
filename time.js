function getTotalX(a, b) {
  let amount = 0
  for (let i = a[a.length - 1]; i <= b[0]; i++) { 
      if (a.filter(el => i % el !== 0).length && b.filter(el => el % i !== 0).length) { 
          amount ++
      }
  }

  return amount
}

console.log(getTotalX([2, 4], [16, 32, 96]))