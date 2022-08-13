//write a function that takes in an integer matrix of potentially unequal height and width and returns the minimum number of passes required 
//to covernt all negative integers in the matrix to positive integers.
//a negative integer in the matrix can only be converted to a positive integer if one or more of its adjacent (left, right, above, or below) elements is positive.
//0 cannot convert
//a single pass through the matrix involves converting all the negative integers that can converted at a particular point in time.

function minimumPassesOfMatrix(matrix) {
  let count = 0;
  
  let positivePositions = [];
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[0].length; j++) {
      if (matrix[i][j] > 0) {
        positivePositions.push([i,j]);
      }
    }
  }
  //console.log("positives: ", positivePositions);
  let index = 0;
  let passLength = positivePositions.length;
  
  while(positivePositions.length > index) {
 
    const currentElement = positivePositions[index];
      let m = currentElement[0];
      let n = currentElement[1];
      if (m>0 && matrix[m-1][n] <0) {
        positivePositions.push([m-1,n]);
        matrix[m-1][n] *= -1;
      } 
      if (m<matrix.length-1 && matrix[m+1][n] <0) {
        positivePositions.push([m+1,n]);
        matrix[m+1][n] *= -1;
      } 
      if (n>0 && matrix[m][n-1] <0) {
        positivePositions.push([m,n-1]);
        matrix[m][n-1] *= -1;
      } 
      if (n<matrix[0].length-1 && matrix[m][n+1] <0) {
        positivePositions.push([m,n+1]);
        matrix[m][n+1] *= -1;
      }
     console.log("test: ", passLength, positivePositions.length);
      if (index === passLength-1) {
        passLength = positivePositions.length;
        count ++;
      }
    index ++;
    }

   for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[0].length; j++) {
      if (matrix[i][j] < 0) {return -1;}
    }
  }
 return count-1;
}
