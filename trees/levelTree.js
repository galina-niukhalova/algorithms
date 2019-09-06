const { root } = require("./Tree");

// find a length of each level of the tree

function levelWidth(root) {
  const counters = [0];
  const array = [root, "s"];

  while (array.length > 1) {
    const node = array.shift();

    if (node === "s") {
      counters.push(0);
      array.push("s");
    } else {
      array.push(...node.children);
      counters[counters.length - 1] += 1;
    }
  }

  return counters;
}

console.log("levels", levelWidth(root)); // [1, 3, 4]
