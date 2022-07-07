//write a function that takes in a binary tree and inverts it. swap every left node in the tree for its corresponding right node.
function invertBinaryTree(tree) {
  if (tree === null) {return tree;}
  
  const tempNode = tree.left;
  tree.left=tree.right;
  tree.right=tempNode;

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
