//write a function that takes in a BT as well as a node contained in that tree and returns the given node's successor.
//a node's successor is the next node to e visited when traversing its tree using the in order tree traversal technique.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  const inorderTraversalArray = inorderTraversal(tree, []);
  const index = inorderTraversalArray.indexOf(node.value);
  if (index===inorderTraversalArray.length-1){return null;}
  else {return new BinaryTree(inorderTraversalArray[index+1]);}
}
function inorderTraversal(tree, array) {
  if (tree.left) {
    inorderTraversal(tree.left,array);
  }
  array.push(tree.value);
  if (tree.right) {
    inorderTraversal(tree.right,array);
  }
  return array;
}
