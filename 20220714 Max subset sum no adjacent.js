//write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.
//sample input: array=[75,105,120,75,90,135]   sample output: 330 (75+120+135)

//dynamic programming: 
//build an array of the same length as the input array. at each index in this new array, store the maximum 
//sum that can be generated using no adjacent numbers located between index 0 and the current index.

function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0;
  else if (array.length === 1) return array[0];
  else {
    let maxSumArray = [array[0], Math.max(array[0],array[1])];
  for (let i=2; i < array.length; i++) {
    let current = Math.max((array[i] + maxSumArray[i-2]), maxSumArray[i-1]);  
    maxSumArray.push(current);
  }
  return maxSumArray[maxSumArray.length-1];
  }
}
