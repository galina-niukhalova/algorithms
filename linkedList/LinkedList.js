class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      this.head = new Node(data, this.head);
    }
  }

  size() {
    let node = this.head;
    let size = 0;

    while (node) {
      size++;
      node = node.next;
    }

    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head) {
      let node = this.head;

      while (node.next) {
        node = node.next;
      }

      return node;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    const head = this.head;

    if (head) {
      if (head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
    }
  }

  removeLast() {
    if (this.head) {
      const prevNode = this.head;
      const lastNode = this.getLast();

      if (prevNode === lastNode) {
        this.head = null;
        return;
      }

      while (prevNode.next !== lastNode) {
        prevNode = prevNode.next;
      }

      prevNode.next = null;
    }
  }

  insertLast(data) {
    const lastNode = this.getLast();

    lastNode.next = new Node(data);
  }

  getAt(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    let node = this.head;
    let i = 0;

    while (index !== i && node) {
      node = node.next;
      i++;
    }

    return node;
  }

  removeAt(index) {
    const prevNode = this.getAt(index - 1);
    const currentNode = this.getAt(index);

    if (!currentNode) {
      return;
    }

    if (!prevNode) {
      this.head = currentNode.next;
    } else {
      prevNode.next = currentNode.next;
    }
  }

  forEach(f) {
    let node = this.head;

    while (node) {
      f(node);
      node = node.next;
    }
  }
}

module.exports = {
  LinkedList,
  Node,
}