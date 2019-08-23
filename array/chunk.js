function chunk(arr, size) {
  let result = [];
  for (let i = 0, k = 0; k < arr.length; k = k + size, i++) {
    result[i] = [];
    for (let j = 0; j < size && k + j < arr.length; j++) {
      result[i].push(arr[k + j]);
    }
  }

  return result;
}

function chunk2(arr, size) {
  let chunks = [];
  let last = [];

  for (let element of arr) {
    if (last.length === size) {
      chunks.push(last);
      last = [element];
    } else {
      last.push(element);
    }
  }

  if (last.length) {
    chunks.push(last);
  }

  return chunks;
}

console.log(chunk2([1, 2, 3, 4, 5], 2));
