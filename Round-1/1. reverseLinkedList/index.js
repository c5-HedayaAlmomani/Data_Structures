/** 
--- Directions
      - Given a linked list
      - Return the linked list in the reversed order
--- Example
      -  const list = new LinkedList();
      -  list.insertLast("a")
      -  list.insertLast("b")
      -  list.insertLast("c")
      -  reverseLinkedList(list.head); 
         Node {data: 'c', next: Node { data: 'b', next: Node { data: 'a', next: null } }
}
*/

const { LinkedList } = require("./linkedlist");

const reverseLinkedList = (list) => {

   let node = list;

   while(node){
      if(node.next ===null){
           node.next===this.head;
           this.head = node
      }

};

return node
}
module.exports = reverseLinkedList;
const list = new LinkedList();
list.insertLast("a")
list.insertLast("b")
// list.insertLast("c")
reverseLinkedList(list.head); 
