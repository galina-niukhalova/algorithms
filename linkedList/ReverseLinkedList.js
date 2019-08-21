const { Stack } = require("../stack/Stack");
const { LinkedList } = require("./LinkedList");

function reverseLinkedList(list) {
  const head = list.getFirst();

  let prev = head;
  let current = prev.next;
  let next = current.next;

  head.next = null;

  while (current) {
    current.next = prev;
    prev = current;
    current = next;
    next = next.next;
  }
}

const list = new LinkedList();

list.insertFirst(1);
list.insertLast(2);
list.insertLast(3);

console.log(list);
console.log(reverseLinkedList(list));
