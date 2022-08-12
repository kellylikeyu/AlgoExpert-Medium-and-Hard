//given a two-dimensional array containing only 0 and 1. each 0 represents land, and each 1 represents part of a river.
//a river consists of any number of 1 that are either horizontally or vertically adjacent.
//the number of adjacent 1 forming a river determine its size. a river can twist
//write a function that returns an array of the sizes of all rivers represented in the input matrix.
//Graph

function riverSizes(matrix) {
  let sizes = [];
  const m = matrix[0].length;
  const n = matrix.length;
  //let visited = new Array(n).fill(new Array(m).fill(false));
  const visited = matrix.map(row => row.map(value => false)); //create a matrix of all false, if the node is visited, turn to true
  for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
      if (visited[i][j] === false) {
        traverseNode(i,j,matrix,visited,sizes);
      }
    }
  }
  return sizes;
}
function traverseNode(i,j,matrix,visited,sizes) {
  let currentSize = 0;
  let nodesToVisit = [[i,j]];
  while (nodesToVisit.length > 0) {
    const current = nodesToVisit.pop();
    i = current[0];
    j = current[1];
    if (visited[i][j] === true) {continue;} 
    else{
      visited[i][j] = true;
      if (matrix[i][j] === 0) {continue;} 
      else {
        currentSize ++;
      }
      if (i > 0 && visited[i-1][j] === false) {
        nodesToVisit.push([i-1,j]);
      }
      if (i < matrix.length-1 && visited[i+1][j] === false) {
        nodesToVisit.push([i+1,j]);
      } 
      if (j > 0 && visited[i][j-1] === false) {
        nodesToVisit.push([i,j-1]);
      }
      if (j < matrix[0].length -1 && visited[i][j+1] === false) {
        nodesToVisit.push([i,j+1]);
      }
    }
  }
  if (currentSize > 0) {sizes.push(currentSize);}
  return sizes;
}
