//write a function that takes in a non-empty array of intergers and returns the maximum sum that can be obtained by summing up all of the integers
// in a non-empty subarray of the input array. (a subarray only contains adjacent numbers)

//dynamic programming: use sum to track maxSum, if sum<0, start from sum=0
function kadanesAlgorithm(array) {
  let maxEnding = -Infinity;
  let sum = 0;
  for (let i=0; i<array.length; i++) {
    sum += array[i];
    maxEnding = sum > maxEnding ? sum : maxEnding;
    sum = sum > 0 ? sum : 0;
  }
  return maxEnding;
}
