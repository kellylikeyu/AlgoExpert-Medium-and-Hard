//write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string.
//there are three edit operations: insertion of a character, deletion of a charactor, and substitution of a charactor.
//using dynamic programming.

function levenshteinDistance(str1, str2) {
  //create a matrix (i+1) * (j+1) like: [[0,1,2,3,4...j],[1,1,2,3,4...j+1],[2,1,2,3,4...j+1],[3,1,2,3,4...j+1]...] (length of i+1)
  let matrixRow = [];
  for (let i=0; i<str2.length+1; i++) {
    matrixRow.push(i);
  }
  let matrix = [];
  for(let j=0; j<str1.length+1; j++) {
    matrix.push([...matrixRow]);
    matrix[j][0] = j;  
  }
  for (let i=1; i<str1.length+1; i++) {
    for (let j=1; j<str2.length+1; j++) {
      if (str1[i-1] === str2[j-1]) {
        matrix[i][j] = matrix[i-1][j-1];
      }
      else {
        matrix[i][j] = 1 + Math.min(matrix[i][j-1], matrix[i-1][j], matrix[i-1][j-1]);      
      }
    }
  }
  return matrix[str1.length][str2.length];
}

