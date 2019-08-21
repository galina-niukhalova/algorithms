function linearSearch(arr, value) {
  let i = -1;
  arr.forEach((el, index) => {
    if (el === value) {
      i = index;
    }
  });

  return i;
}

function linearSearch2(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
}

console.log(linearSearch([2, 6, 7, 90, 103], 90));
