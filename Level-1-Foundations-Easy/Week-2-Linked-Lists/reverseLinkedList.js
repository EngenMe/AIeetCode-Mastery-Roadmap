const LinkedList = require('./LinkedList');

function reverseLinkedList(arr) {
  if (!arr.length || arr.length === 1) return arr;
  const list = new LinkedList();

  list.fillWithArray(arr);

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
