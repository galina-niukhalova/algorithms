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

function orderStack(stack) {
  let tempStack = new Stack()

  while(stack.peek()) {
    const value = stack.pop()

    while(tempStack.peek() > value) {
      const tempValue = tempStack.pop()
      stack.push(tempValue)
    }
    tempStack.push(value)
  }

  return tempStack
}

const stack1 = new Stack();
// [10, 5, 2, 1, 11]
stack1.push(10);
stack1.push(5);
stack1.push(2);
stack1.push(1);
stack1.push(11);
console.log(orderStack(stack1));

const stack2 = new Stack();
// [34, 3, 31, 98, 92, 23]
stack2.push(34)
stack2.push(3)
stack2.push(31)
stack2.push(98)
stack2.push(92)
stack2.push(23)
console.log(orderStack(stack2));
