//write a function that takes in an array of integers and returns a new array containing, at each index, the next element in the input array that's greater
//than the element at that index in the input array. aray is circular.
//sample input=[2,5,-3,-4,6,7,2]  output=[5,6,6,6,7,-1,5]
function nextGreaterElement(array) {
  // Write your code here.
  let result =[];
  const maxNum = Math.max(...array);
  const doubleArray = array.concat(array);
  for (let i= 0; i<array.length; i++) {
    if (array[i] === maxNum) {
      result.push(-1);
    }
    else {
      let j= i+1;
      while (j<doubleArray.length) {
        if (doubleArray[j] > doubleArray[i]) {
          result.push(doubleArray[j]);
          break;
        }
        else {
          j++;
        }
      }
    }
  }
  return result;
}
