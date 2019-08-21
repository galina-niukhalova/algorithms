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

module.exports = {
  Stack
};
