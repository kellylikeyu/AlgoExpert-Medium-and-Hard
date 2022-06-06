//write a function that takes in an array of integers and returns a boolean whether the array is monotonic. (an array entirelly non increasing or entirely non-decreasing)
function isMonotonic(array) {
	let ind = 0;
	while (array[ind +1] === array[ind] && ind < array.length -1) {
		ind ++;
	}
	if (array[ind+1] > array[ind]) {
		for (let i = ind+1; i<array.length; i++) {
			if (array[i+1] < array[i]) {
				return false;
			}
		}
	}
	else if (array[ind+1] < array[ind]) {
		for (let i = ind+1; i<array.length; i++) {
			if (array[i+1] > array[i]) {
				return false;
			}
		}		
	}
	else {return true;}
	return true;
}
