//given a pre-order traversal array, reconstruct the BST, return the root node. pre-order: current, left, right;
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length ===0) {return null;}
  const rootValue = preOrderTraversalValues[0];
  let rightInd = 1;
  while(rightInd < preOrderTraversalValues.length) {
    if (preOrderTraversalValues[rightInd] < rootValue) {
      rightInd ++;
    }else {break;}
  }

  const leftNode = reconstructBst(preOrderTraversalValues.slice(1,rightInd));
  const rightNode = reconstructBst(preOrderTraversalValues.slice(rightInd,preOrderTraversalValues.length));
  const bst = new BST(rootValue,leftNode,rightNode);
  return bst;
 
}
