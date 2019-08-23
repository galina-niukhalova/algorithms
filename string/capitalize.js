function capitalize1(string) {
  return (
    string
      .split(" ")
      // .map(el => el[0].toUpperCase() + el.substring(1))
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ")
  );
}

function capitalize(string) {
  let result = "";
  let fl = true;

  for (let ch of string) {
    result += fl ? ch.toUpperCase() : ch;

    fl = ch === " ";
  }

  return result;
}

console.log(capitalize("a short sentence"));
console.log(capitalize("a lazy fox"));
console.log(capitalize("look, it is working"));
