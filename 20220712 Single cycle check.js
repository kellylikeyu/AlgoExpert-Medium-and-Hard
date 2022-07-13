// given an array of integers where each integer represents a jump of its value in the array. eg, "2" represents a jump of two indices forward in the array.
// "-3" represents a jump of three indices backward in the array.
//if a jump spills past the array's bounds, it wraps over to the other side. eg, a jump of -1 at index 0 brings to the last index, 
//a jump of 1 at last index brings to index 0.
//write a function that returns a boolean representing whether the jumps in the array form a single cycle. 
//a single cycle is to start at any index in the array and following the jumps, every element in the array is visited exactly once before back on the starting index.

//1. jump through all elements. 2. set up a counter to keep track of how many elements already visited
//3. two conditions to met for the input array to have a single cycle:
//1) starting element cannot be jumped through more than once, 2) the (n+1)th element to jump though must be the first element visited.

function hasSingleCycle(array) {
  let numberOfVisited = 0;
  let currentInd = 0;
  while (numberOfVisited < array.length) {
    if (numberOfVisited > 0 && currentInd === 0) return false;  //jump to starting index before visiting all other elements
     numberOfVisited ++;
    currentInd = getNextPosition(array,currentInd);
  }
  return currentInd === 0;  //back to starting index
}

function getNextPosition(array, currentInd) {
  const nextPosition = (currentInd + array[currentInd]) % array.length;
  return nextPosition >= 0 ? nextPosition : array.length + nextPosition; 
}
