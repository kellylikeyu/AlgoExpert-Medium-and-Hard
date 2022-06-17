//write a function that takes in a BST and a positive integer K and returns the Kth largest interger contained in the BST
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  const array = traverse(tree,[]);
  return array[k-1];
}
function traverse(tree, array) {
 
  if(tree.right !== null) {
    traverse(tree.right,array);
  }
  array.push(tree.value);
  if(tree.left !== null) {
    traverse(tree.left,array);
  }
  return array;
}
  
