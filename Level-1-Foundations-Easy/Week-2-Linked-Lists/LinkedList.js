const Node = require('./Node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  static toArray(current) {
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  fillWithArray(arr) {
    arr.forEach((element) => {
      this.append(element);
    });
  }
};
