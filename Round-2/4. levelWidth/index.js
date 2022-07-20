/*
--- Directions
        Given the root node of a tree, return
        an array where each element is the width
        of the tree at each level.

--- Example

        Given:
           0
        /  |  \
        1  2   3
        |      |
        4      5

Answer: [1, 3, 2] 
*/
//{root :data:data , chelidern=[]}
const Node = require("./node");

const levelWidth = (root) => {
  const arr = [root, "end level"];
  const answer = [0];

  while (arr.length > 1) {
    let node = arr.shift();
    if (node === "end level") {
      answer.push(0);
      arr.push("end level");
    } else {
      arr.push(...node.children);
      answer[answer.length - 1]++;
    }
  }
  return answer;
};

module.exports = levelWidth;
