//write a function that takes in a non empty sorted array of distince integers, constructs a BST from the integers, and returns the root of the BST.
//The function should minimuzed the height of the BST
function minHeightBst(array) {
 return minHeightBstInsertMiddle(array,0,array.length-1);
  }

function minHeightBstInsertMiddle(array, left, right) {
  if(left>right) return null;
  const midInd = Math.floor((left+right)/2);
  const bst = new BST(array[midInd]);
  bst.left = minHeightBstInsertMiddle(array,left,midInd-1);
  bst.right = minHeightBstInsertMiddle(array,midInd+1,right);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
