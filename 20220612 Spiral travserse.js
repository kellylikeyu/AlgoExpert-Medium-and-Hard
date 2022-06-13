//write a function that takes in an n x m two dimensional array and returns one dimentional array of all the array's elements in spiral order.
//sample input: array = [
//[1,2,3,4],
//[12,13,14,5],
//[11,16,15,6],
//[10,9,8,7],
//]   sample output:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
function spiralTraverse(array) {
	let traverse = [];
	let startRow = 0;
	let startColumn = 0;
	let endRow = array.length-1;
	let endColumn = array[0].length -1;
  
	while (endRow>=startRow  && endColumn >= startColumn) {
		if (startColumn <= endColumn && startRow <= endRow) {
			for (let l=startColumn; l<endColumn+1; l++) {
			traverse.push(array[startRow][l]);
	}
		}	
	if (startRow < endRow && startColumn <= endColumn) {
		for (let i=startRow+1; i<endRow+1; i++) {
			traverse.push(array[i][endColumn]);
		}
	}
	if (startRow < endRow && startColumn < endColumn) {
		for (let j=endColumn-1; j>=startColumn; j--) {
			traverse.push(array[endRow][j]);
		}
		for (let k=endRow-1; k>startRow; k--) {
			traverse.push(array[k][startRow]);
		}
	}
		startRow ++;
		startColumn ++;
		endRow --;
		endColumn --;
	}
	return traverse;
}

