const { LinkedList } = require("./LinkedList");

/**
 * Find a middle of Linked List
 * @param {LinkedList} list 
 */

function midPoint(list) {
  const listHead = list.getFirst();

  if (listHead) {
    let slow = listHead;
    let fast = listHead;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  } else {
    return null;
  }
}

const list = new LinkedList();
list.insertFirst(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

console.log(midPoint(list));
