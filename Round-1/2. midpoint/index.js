/** 
--- Directions
      -  Return the "middle" node of a linked list.
      -  If the list has an even number of elements, return
      -  the node at the end of the first half of the list.
      -  *Do not* use a counter variable, *do not* retrieve
      -  the size of the list, and only iterate
      -  through the list one time.
--- Example
      -  const list = new LinkedList();
      -  list.insertLast("a")
      -  list.insertLast("b")
      -  list.insertLast("c")
      -  midpoint(list); // returns { data: "b" }
*/

const {LinkedList} = require("./linkedlist");

const midpoint = (list) => {

const length = list.size();
if(length%2!==0){

let index = Math.floor(length/2)
return 
}


};

module.exports = midpoint;
