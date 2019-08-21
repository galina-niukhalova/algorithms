// return sort and uniq array
function uniqSort(arr) {
  const cache = {};

  arr.forEach(el => {
    if (!cache[el]) cache[el] = true;
  });

  return Object.keys(cache).sort((a, b) => a - b);
}

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2, 2])); // [2, 3, 4]
