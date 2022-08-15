//write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
//the function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order

function fourNumberSum(array, targetSum) {
 let results = [];
  let twoSumPairs = {};
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let twoSum = array[i] + array[j];
      if (twoSumPairs[targetSum-twoSum]) {
        for (let pair of twoSumPairs[targetSum-twoSum]) {
          results.push(pair.concat([array[i],array[j]]));
        }
      }
    }
     let start = 0;
      while (start < i) {
        let frontSum = array[i] + array[start];
        if (twoSumPairs[frontSum]) {
          twoSumPairs[frontSum].push([array[start], array[i]]);
        }
        else {
          twoSumPairs[frontSum] = [[array[start], array[i]]];
        }
        start ++;
      }
    }
  return results;
}
