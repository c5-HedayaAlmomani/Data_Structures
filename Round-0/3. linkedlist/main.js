// LinkedList => {head:data}
//{head:{data:data :next :{data:data ,next:{...}}}}
// Node => {data :data , next : null}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    const newNode = new Node(value, this.head);

    this.head = newNode;
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    if (!node.next) {
      return null;
    }

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

  // اذا بدي احذف اخر عنصر رح اخلي العنصر الي قبل الاخير يوصل لل null
  // {head:null}
  //{head:{data :data , next : null}}
  //{head:{data:data , next:{data :data , next :null}}}

  removeLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
    }

    let node = this.head.next;
    let previous = this.head;
    while (node.next) {
      node = node.next;
      previous = previous.next;
    }

    previous.next = null;
  }

  //{head:null}
  //{head:{data:data , next:null}}
  //{head:{data:data , next:{data:data , next :null}}}
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let count = 0;
    let node = this.head;
    let counter = 0;
    while (node) {
      if (count === index - 1) {
        if (!node.next.next) {
          node.next = null;
        } else {
          node.next = node.next.next;
        }
      }

      count++;
      node = node.next;
    }
  }

  getAt(index) {
    let node = this.head;
    let count = 0;
    while (node) {
      if (index === count) {
        return node;
      }

      count++;
      node = node.next;
    }
  }

  //{head:{data:data , next:{data:data , next:null}}}
  //{head:{data:data , next:null}}
  //{head:null}

  insertLast(data) {
    let newNode = new Node(data);
    let node = this.head;
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // node = اخر قيمة
    while (node.next) {
      node = node.next;
    }

    node.next = newNode;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  //{head:null}
  //{head:{data:data , next:null}}
  // {head:{data:data , next:{data:data , next:{data:data , next:null}}}}

  insertAt(data, index) {
    if (!this.head) {
      this.head.next = new Node(data);
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
    }

    let count = 1;
    let previous = this.head;
    let node = this.head.next;
    while (node) {
      if (count === index) {
        previous.next = new Node(data, node);
      }
      previous = node;
      node = node.next;
      count++;
    }

    previous.next = new Node(data, node);
  }
}

const ss = new LinkedList();

ss.insertFirst(1);
ss.insertFirst(4);
// ss.insertFirst(5);
ss.insertLast(5);
console.log(ss);
