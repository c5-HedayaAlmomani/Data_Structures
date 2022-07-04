/** 
--- Directions
       - Given a linked list
       - Return the element n, start counting from the last node in the list -> last node will be counted as 0
       - Don't call the "size" method of the linked list
       - Assume that n will always be less than the length of the list
--- Examples
        const list = new LinkedList();
        list.insertLast("a");
        list.insertLast("b");
        list.insertLast("c");
        list.insertLast("d");
        fromLast(list, 1).data --> "c"
*/

const { LinkedList } = require("./linkedlist");
// {data :a , next :{data :b , next : {data:c , next :null}}}
const fromLast = (list, n) => {
  let node = new LinkedList();
  let first = list;
  let count = 0;

  while (first.next) {
    node.insertFirst(first.data);
    first = first.next;
  }

  while (node.next) {
    if (count === n) {
      return node;
    }
    node = node.next;
    count++;
  }
};


module.exports = fromLast;
