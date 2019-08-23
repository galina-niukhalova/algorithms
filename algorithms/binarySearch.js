function binarySearch(num, target) {
  let index = Math.ceil((num.length - 1) / 2);
  let min = 0;
  let max = num.length;
  let cache = {};

  while (index >= 0 && index < num.length && !cache[index]) {
    cache[index] = true;

    if (num[index] === target) {
      return index;
    }

    if (num[index] > target) {
      max = index;
      index -= Math.ceil((index - min) / 2);
    } else {
      min = index;
      index += Math.floor((max - index) / 2);
    }
  }

  return -1;
}

function binarySearch1(num, target) {
  let min = 0;
  let max = num.length - 1;
  let index;

  while (min <= max) {
    index = Math.floor((max + min) / 2);

    if (num[index] === target) {
      return index;
    }

    if (num[index] > target) {
      max = index - 1;
    } else {
      min = index + 1;
    }
  }

  return -1
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], -1) === 0);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 0) === 1);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 3) === 2);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 5) === 3);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9) === 4);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12) === 5);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2) === -1);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], -2) === -1);
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 15) === -1);
console.log(binarySearch([2, 5], 5) === 1);
console.log(
  binarySearch(
    [
      945,
      947,
      948,
      952,
      953,
      954,
      955,
      956,
      957,
      958,
      960,
      961,
      965,
      967,
      969,
      970,
      971,
      972,
      975,
      977,
      978,
      979,
      980,
      981,
      982,
      986,
      987,
      988,
      990,
      992,
      994,
      995,
      997
    ],
    990
  ) == 28
);
