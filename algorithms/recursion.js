function joinElements(arr, joinString) {
  function recursion(index, result) {
    if (index > arr.length - 1) {
      return result;
    } else {
      result += arr[index] + joinString;
      return recursion(index + 1, result);
    }
  }

  return recursion(0, "");
}

console.log(joinElements(["s", "cr", "t cod"], "e"));

function iterativeJoinElements(arr, joinString) {
  return arr.reduce((acc, currValue) => acc + currValue + joinString, '');
}

console.log(iterativeJoinElements(["s", "cr", "t cod"], "e"));
