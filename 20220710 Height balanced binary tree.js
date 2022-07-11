//write a function that returns true if a BT is height balanced.
//a BT is height balanced if for each node in the tree, the difference between the height of its left subtree and the height of its right subtree is at ost 1.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  const balanceInfo = { isBalanced : true};
  calculateHeight(tree,0,balanceInfo);
  return balanceInfo.isBalanced;
}

function calculateHeight(tree,height,balanceInfo) {
  if (tree===null) {return height;}
  const leftHeight = calculateHeight(tree.left,height+1,balanceInfo);
  const rightHeight = calculateHeight(tree.right,height+1,balanceInfo);
  if (Math.abs(leftHeight-rightHeight) >1) {balanceInfo.isBalanced = false;}
  return Math.max(leftHeight,rightHeight);
}
