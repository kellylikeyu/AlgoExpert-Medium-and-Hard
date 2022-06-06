//write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero.
//returns an array containing these two numbers, with the number from the first array in the first position.

function smallestDifference(arrayOne, arrayTwo) {
	const sortedOne = arrayOne.sort((a,b) => a - b);
	const sortedTwo = arrayTwo.sort((a,b) => a - b);
	let pointerOne = 0;
	let pointerTwo = 0;
	let smallDiff = Infinity;
	let smallPair = [];
	while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
		let numOne = sortedOne[pointerOne];
		let numTwo = sortedTwo[pointerTwo];
		if (numOne == numTwo) {
			smallPair = [numOne, numTwo];
			return smallPair;
		}
		else if (numOne < numTwo) {
			pointerOne ++;
		} 
		else if (numOne > numTwo) {
			pointerTwo ++;
		}
		if (Math.abs(numOne - numTwo) < smallDiff) {
			smallDiff = Math.abs(numOne - numTwo);
			smallPair = [numOne, numTwo];
		}
	} return smallPair;
}
