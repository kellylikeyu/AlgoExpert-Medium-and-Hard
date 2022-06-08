//a function that takes in an array of integers and returns the length of the longest peak in the array.
//a peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip, and become strictly decreasing. 
//at least three integers are requred to form a peak
function longestPeak(array) {
  let longest = 0;
	if (array.length == 1 || array.length == 2) {
		return 0;
	}
	for (let i=1; i<array.length; i++) {
		if (array[i] > array[i-1] && array[i] > array[i+1]) {
			let peakInd = i;
			let length = 1;
			while (peakInd>0 && array[peakInd] > array[peakInd-1]) {
					length++;
					peakInd--;
			}
			peakInd = i;
			while (peakInd<array.length && array[peakInd] > array[peakInd+1]) {
					length++;
					peakInd++;
			}
			if (length > longest) {
				longest = length;
			}
		}
	}
	return longest;
}
