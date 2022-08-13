//given a two dimensional array of potentially unequal height and width containing only 0 and 1.
//0 represents water and 1 represents island. islands are horizontally or vertically adjacent and don't touch the border.
//write a function that returns a modified version of the input matrix, where all of teh islands are removed. remove an island by replacing 1 with 0.

function removeIslands(matrix) {
  const visited = matrix.map((row) => row.map((item) => false));
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      if (visited[i][j] === false) {
        traverse(i, j, matrix, visited);
      }
    }
  }
  return matrix;
}

function traverse(i, j, matrix, visited) {
  let nodesToVisit = [[i, j]];
  let candidates = [];
  while (nodesToVisit.length > 0) {
    let current = nodesToVisit.pop();
    i = current[0];
    j = current[1];
    if (visited[i][j] === true) {
      continue;
    } else {
      visited[i][j] = true;
      if (matrix[i][j] === 0) {
        continue;
      } else {
        candidates.push([i, j]);
      }
      if (i > 0 && visited[i - 1][j] === false) {
        nodesToVisit.push([i - 1, j]);
      }
      if (i < matrix.length - 1 && visited[i + 1][j] === false) {
        nodesToVisit.push([i + 1, j]);
      }
      if (j > 0 && visited[i][j - 1] === false) {
        nodesToVisit.push([i, j - 1]);
      }
      if (j < matrix[0].length - 1 && visited[i][j + 1] === false) {
        nodesToVisit.push([i, j + 1]);
      }
    }
  }
  for (let candidate of candidates) {
    let k = candidate[0];
    let l = candidate[1];
    if (
      k === 0 ||
      l === 0 ||
      k === matrix.length - 1 ||
      l === matrix[0].length - 1
    ) {
      candidates = [];
    }
  }
  candidates.forEach((item) => (matrix[item[0]][item[1]] = 0));
  return matrix;
}
