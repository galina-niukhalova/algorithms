function mergeSort(arr) {
  if(arr.length === 1) {
    return arr
  }

  let middle = Math.floor(arr.length / 2)

  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right]
}

// console.log(merge([-30, 22], [0, 97]));
console.log(mergeSort([-30, 22, 0, 97]))
