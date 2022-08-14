//write a function that takes in a binary tree and returns its diameter.
//the diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass though the root of the tree.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  //calculate height for each branch(subtree)
  //diameter = leftSubtreeHeight + rightSubtreeHeight
  //max diameter = max(left subtree diameter, right subtree diameter,left subtree height + right subtree height)
 return calDiameter(tree,0);
}
function calDiameter(tree,diameter) {
  if(tree === null) {return diameter;}
  let leftHeight = calHeight(tree.left);
  let rightHeight = calHeight(tree.right);
  diameter = leftHeight + rightHeight;
  return Math.max(calDiameter(tree.left,diameter), calDiameter(tree.right,diameter), diameter);
}

function calHeight(tree) {
  if (tree === null) {return 0;}
  return 1 + Math.max(calHeight(tree.left), calHeight(tree.right));
}
