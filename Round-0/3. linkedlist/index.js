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
    const tempObj = this;

    while (tempObj.next) {
      count++;

      tempObj = tempObj.next;
    }
    return count;
  }

  getFirst(){
    return this.head
  }
  getLast(){
    if (this.next==null){
        return this;
    }
  }

  clear(){
    this.head= null
    this.next =null
    this.data =null
  }

  removeFirst(){
    this.head = this.next;

  }
  removeLast(){
  }
}

module.exports = { Node, LinkedList };
