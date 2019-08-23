function steps1(N) {
  let result = "";
  while (result.length !== N) {
    result += " ";
  }

  for (let i = 0; i < result.length; i++) {
    result = result.substr(0, i) + "#" + result.substr(i + 1);
    console.log(result);
  }

  return result;
}

function steps(N) {
  for(let i=0; i<N; i++) {
    let result = ''

    for(let j=0; j<N; j++) {
      result += j <= i ? '#' : ' '
    }

    console.log(result)
  }
}

console.log('step 4')
steps(4);
console.log('step 5')
steps(5);
