const { LinkedList } = require("./LinkedList");

function fromLast(list, n) {
  const listHead = list.getFirst();

  let slow = listHead;
  let fast = listHead;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

const l = new LinkedList();

l.insertFirst("1");
l.insertLast("2");
l.insertLast("3");
l.insertLast("4");
l.insertLast("5");

console.log(fromLast(l, 2));
