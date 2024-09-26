const LinkedList = require('./LinkedList');

function mergeTwoSortedLists(arr1, arr2) {
  const l1 = new LinkedList();
  const l2 = new LinkedList();

  l1.fillWithArray(arr1);
  l2.fillWithArray(arr2);

  let c1 = l1.head;
  let c2 = l2.head;

  const dummy = new (require('./Node'))(0);
  let current = dummy;

  while (c1 && c2) {
    if (c1.data <= c2.data) {
      current.next = c1;
      c1 = c1.next;
    } else {
      current.next = c2;
      c2 = c2.next;
    }
    current = current.next;
  }

  if (c1) {
    current.next = c1;
    c1 = c1.next;
  } else if (c2) {
    current.next = c2;
    c2 = c2.next;
  }

  return LinkedList.toArray(dummy.next);
}

console.log(mergeTwoSortedLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoSortedLists([], []));
console.log(mergeTwoSortedLists([], [0]));
