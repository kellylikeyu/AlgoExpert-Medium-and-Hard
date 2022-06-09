//given an array of integers between 1 and n, inclusive, where n is the length of the array. 
//write a function that returns the first integer that appears more than once. if no integer appears more than once, return -1.
function firstDuplicateValue(array) {
	let storage = {};
	for (let i=0; i<array.length; i++) {
		if (!storage[array[i]]) {
			storage[array[i]] = true;
		}
		else {
			return array[i];
		}
	}
  return -1;
}
