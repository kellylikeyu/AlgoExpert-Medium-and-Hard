//write a function that takes in an array of integers and returns an array of length 2 representing the largest range of integers contained in that array
//a range of numbers is defined as a set of numbers that come right after each other in the set of real integers.

function largestRange(array) {
  const sorted = [...new Set(array.sort((a,b) => a-b))];
 
  let left = 0;
  let right = 0;
  let result = [];
  let largestRange = 0;
  for (let i=1; i<sorted.length; i++) {
    if (sorted[i] === sorted[i-1] +1) {
      right ++;
      if (right+1-left > largestRange) {
        result = [sorted[left], sorted[right]];
        largestRange = right+1-left;
      }
    }
    else {
      left = i;
      right = i
    }
  }
  return result.length !== 0 ? result : [sorted[0],sorted[0]];
}
