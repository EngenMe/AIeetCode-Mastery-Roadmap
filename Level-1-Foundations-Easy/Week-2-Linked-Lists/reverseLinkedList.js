const LinkedList = require('./LinkedList');

function reverseLinkedList(head) {
  if (!head.length || head.length === 1) return head;
  const list = new LinkedList();

  list.fillWithArray(head);

  let prev = null;
  let current = list.head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  list.head = prev;

  return list.toArray();
}

console.log(reverseLinkedList([1, 2, 3, 4, 5]));
console.log(reverseLinkedList([1, 2]));
console.log(reverseLinkedList([]));
