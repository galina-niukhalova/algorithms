function memoize(fn) {
  const cache = {};

  return function(...arg) {
    const n = arg[0];
    if (n in cache) {
      console.log("From cache");
      return cache[n];
    } else {
      console.log(`Calc..${n}`);
      cache[n] = fn(...arg);
      return cache[n];
    }
  };
}

const factorial = memoize(n => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
});

// calc every ...5
console.log(factorial(5));
// calc 6 and <6 from cache
console.log(factorial(6));
// calc 7 and <7 from cache
console.log(factorial(7)); 

