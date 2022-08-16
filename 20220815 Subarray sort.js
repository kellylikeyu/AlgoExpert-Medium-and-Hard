//write a function that takes in an array of at least two integers and that returns an array of the starting and ending indices of the smallest subarray
//in the input array that needs to be sorted in place in order for the entire input array to be sorted.

function subarraySort(array) {
   let smallest = Infinity;
  let largest = -Infinity;
  for (let i=1; i<array.length; i++) {
    if (array[i-1] > array[i]) {
      smallest = array[i] < smallest? array[i] : smallest;
      largest = array[i-1] > largest? array[i-1] : largest;
    }
  }
  if (smallest === Infinity && largest === -Infinity) return [-1,-1];
  let left = 0;
  while(array[left] <= smallest) {
    left ++;
  }
  let right = array.length-1;
  while(array[right] >= largest) {
    right --;
  }
  return [left,right];
}
