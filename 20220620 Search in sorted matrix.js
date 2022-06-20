//given a two dimensional array of distince integers and a target interger.each row and column is sorted.
//write a function that returns an array of the row and column indices of the target integer if it's contained the in the matrix.
function searchInSortedMatrix(matrix, target) {
  let rowInd = 0;
  let columnInd = matrix[0].length-1;

  while (rowInd <= matrix.length && columnInd >=0) {
    let testNum = matrix[rowInd][columnInd];
    if (testNum === target) {
      return [rowInd, columnInd];
    }
    else if (testNum > target) {
      columnInd --;
    }
    else {
      rowInd ++;
    }
  }
  return [-1, -1];
}
