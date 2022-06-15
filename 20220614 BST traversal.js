//traversal BST using 
//in-order: left, root, right, 
//pre-order: root, left, right
//post-order: left, right, root
function inOrderTraverse(tree, array) {
  // Write your code here.
  if (tree.left !== null) {
    inOrderTraverse(tree.left,array);
  }
  array.push(tree.value);
  if (tree.right !== null) {
    inOrderTraverse(tree.right,array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  array.push(tree.value);
  if (tree.left !== null) {
    preOrderTraverse(tree.left, array);
  }
  if (tree.right !== null) {
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
    if (tree.left !== null) {
    postOrderTraverse(tree.left,array);
  }
  if (tree.right !== null) {
    postOrderTraverse(tree.right,array);
  }
  array.push(tree.value);
  return array;
}
