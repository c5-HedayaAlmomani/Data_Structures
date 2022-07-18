/* 
--- Directions
        1) Implement the Node class to create
        a binary search tree.  The constructor
        should initialize values "data", "left",
        and "right".

        2) Create a BST(Binary search tree) class. The tree constructor
        should initialize a "root" property to null.
        
        3) Implement the "insert" method for the
        BST class.  Insert should accept an argument
        "data", then create an insert a new node
        at the appropriate location in the tree.

        4) Implement the "contains" method for the Bst
        class. Contains should accept a "data" argument
        and return true or false depend on the node exist or not. 
*/
// NODE {data :data , left:{} , right :{}}
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.rigth = null;
  }
}

// BST {root :{data :data , left:{} , rigtht:{}}}
class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let temp_root = this.root;
    if (this.temp_root === null) {
      this.temp_root = new Node(data);
    } else if (data < this.temp_root.data && this.temp_root.left) {
      this.temp_root.left.insert(data);
    } else if (data < this.temp_root.data) {
      this.temp_root.left = new Node(data);
    } else if (data > this.temp_root.data && this.temp_root.rigth) {
      this.temp_root.rigth.insert(data);
    } else if (data > this.temp_root.data) {
      this.temp_root.rigth = new Node(data);
    }
  }

  contains(data) {
    if (data === this.root.data) {
      return this.root;
    }

    if (data > this.root.data && this.root.rigth) {
      return this.root.rigth.contains(data);
    } else if (data < this.root.data && this.root.left) {
      return this.root.left.contains(data);
    }

    return "not found";
  }
}
module.exports = { Node, BST };
