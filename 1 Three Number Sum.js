// a function that takes in a non-empty arry of distince integers and an integer representing a target sum. 
// The function find all triplets in the array that sum up to the target sum and return a two dimensional array of all theres triplets.
function threeNumberSum(array, targetSum) {
	const result = [];
	const sortedArray = array.sort((a,b) => a-b);
	for (let i=0; i<array.length-2; i++) {
		let left = i+1;
		let right = array.length - 1;
		while (left < right) {
			let currentSum = sortedArray[i] + sortedArray[left] + sortedArray[right];
			if (currentSum == targetSum) {
				let sumArray = [sortedArray[i], sortedArray[left], sortedArray[right]];
				result.push(sumArray);
				left ++;
			}
			else if (currentSum < targetSum) {
				left ++;
			}
			else if (currentSum > targetSum) {
				right --;
			}
		}
	} return result;
}
