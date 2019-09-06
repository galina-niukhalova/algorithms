function matrixSpiral(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let counter = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let columnStart = 0;
  let columnEnd = n - 1;

  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    for (let k = columnStart; k <= columnEnd; k++) {
      result[rowStart][k] = counter;
      counter++;
    }

    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][columnEnd] = counter;
      counter++;
    }

    columnEnd--;

    for (let k = columnEnd; k >= columnStart; k--) {
      result[rowEnd][k] = counter;

      counter++;
    }

    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][columnStart] = counter;
      counter++;
    }
    columnStart++;
  }

  return result
}

console.log(matrixSpiral(5))
