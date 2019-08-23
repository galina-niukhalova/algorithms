function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";

    if (i % 3 === 0) {
      result += "fizz";
    }
    if (i % 5 === 0) {
      result += "buzz";
    }

    console.log(result === "" ? i : result);
  }
}

fizzbuzz(5)
