class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  breathFirstTraversal(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children)
      fn(node.data)
    }
  }

  depthFirstTraversal(fn) {
    const arr = [this.root]

    while(arr.length) {
      const node = arr.shift()

      arr.unshift(...node.children)

      fn(node.data)
    }
  }
}


const root = new Node(20)
const ch1 = new Node(0)
const ch2 = new Node(40)
const ch3 = new Node(-15)
root.children.push(ch1)
root.children.push(ch2)
root.children.push(ch3)
const ch4 = new Node(12)
const ch5 = new Node(-2)
const ch6 = new Node(1)
ch1.children.push(ch4)
ch1.children.push(ch5)
ch1.children.push(ch6)
const ch7 = new Node(-2)
ch3.children.push(ch7)

const tree = new Tree(root)
// tree.depthFirstTraversal(console.log)

module.exports = {
  root,
}