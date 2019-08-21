export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n = new Node("There");
console.log(n.data); // 'There'
console.log(n.next); // null
const n2 = new Node("Hi", n);
console.log(n2.next); // returns n
