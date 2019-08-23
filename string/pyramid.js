function pyramid(N) {
  for (let i = 0; i < N; i++) {
    const columns = N + (N - 1);
    const middle = Math.floor(columns / 2);
    let result = "";

    for (let j = 0; j < columns; j++) {
      if (j >= middle - i && j <= middle + i) {
        result += "#";
      } else {
        result += " ";
      }
    }

    console.log(result);
  }
}

pyramid(6)
//      #     
//     ###    
//    #####   
//   #######  
//  ######### 
// ###########
