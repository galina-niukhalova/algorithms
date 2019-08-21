class Stack {
  _storage = [];

  push(value) {
    this._storage.push(value);
  }

  pop() {
    return this._storage.pop();
  }

  peek() {
    return this._storage[this._storage.length - 1];
  }
}

class Queue {
  st1 = new Stack();
  st2 = new Stack();

  add(value) {
    this.st1.push(value);
  }

  remove() {
    if (!this.st2.peek()) {
      while (this.st1.peek()) {
        const value = this.st1.pop();
        this.st2.push(value);
      }
    }

    return this.st2.pop();
  }

  peek() {}
}

const q = new Queue()

q.add(1)
q.add(2)
q.add(3)
q.add(4)

console.log(q.remove())

q.add(5)

console.log(q.remove())
console.log(q.remove())
console.log(q.remove())
console.log(q.remove())

console.log(q)
