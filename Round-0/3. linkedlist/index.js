// --- Directions
// Implement classes Node and Linked Lists
// See "directions" document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}
/* this:{
    head:null;
    data:data;
    next:{
        data:data;
        next:{
            data:data;
            next:....
        }
    }
}



*/
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }
  size() {
    let count = 0;
    const tempObj = this.head;

    while (tempObj) {
      count++;

      tempObj = tempObj.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.next) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      return this.insertFirst(data);
    }

    let last = this.getLast();
    last.next = new Node(data);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (index === counter) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      return this.removeFirst();
    }
    const previous = this.getAt(index - 1);
    if (!previous) {
      return;
    }
    previous.next = this.getAt(index + 1);
  }

  insertAt(data, index) {
    if (index === 0) {
      return this.insertFirst(data);
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, this.getAt(index));
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
