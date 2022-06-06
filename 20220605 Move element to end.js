// input: an array and an integer. write a function that moves all instances of that integer in the array to the end
//of the array

function moveElementToEnd(array, toMove) {
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		while (array[right] == toMove && left < right) {
			right --;
		}
		if (array[left] == toMove) {
			let temp = array[left];
			array[left] = array[right];
			array[right] = temp;
			left ++;
			right --;
		}
		else {
			left ++;
		}
	}
	return array;
}
