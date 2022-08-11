//given two positive integers representing the width and height of a grid-shaped, rectangular graph.
//write a function that returns the number of ways to reach the bottom right corner of the graph when starting at the top left corner.
//each move you take must either go down or right.

function numberOfWaysToTraverseGraph(width, height) {
  let firstRow = new Array(width-1).fill(1);
  firstRow.unshift(0);
  let matrix = [firstRow];
  for (let i=1; i<height; i++) {
    matrix.push([...firstRow]);
    matrix[i][0] = 1;
  }
  for(let i=1; i < height; i++){
    console.log(matrix[i][0]);
    for(let j=1; j < width; j++) {
      matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
    }
  }
  return matrix[height-1][width-1];
}
