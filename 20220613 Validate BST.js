//write a function that takes in a potentially invalid binary search tree and returns a boolean representing whether the BST is valid
//a valid BST: node value is strictly greater than the values of every node to its left; less or equal to every node to its right.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
   return validateBstValue(tree, -Infinity, Infinity);
}
function validateBstValue(tree,minLimit,maxLimit) {
  if (tree === null) return true;
  if (tree.value < minLimit || tree.value >= maxLimit) return false;
  let leftIsValid = validateBstValue(tree.left, minLimit, tree.value);
  let rightIsValid = validateBstValue(tree.right, tree.value, maxLimit);
  return leftIsValid && rightIsValid;
}
