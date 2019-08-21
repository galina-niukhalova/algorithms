const { LinkedList } = require("./LinkedList");

function isCircular(list) {
  const listHead = list.getFirst();
  let slow = listHead;
  let fast = listHead;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

const l = new LinkedList();
l.insertFirst("1");
l.insertLast("2");
l.insertLast("3");

l.getLast().next = l.getFirst();

console.log(isCircular(l));
