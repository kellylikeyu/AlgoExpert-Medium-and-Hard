//given an array of integers and another array of three distince integers. The first array is guaranteed to only contain intergers that are in the second array.
//The second array represents a desired order for the intergers in the irst array.
//write a function that sorts the first array according to the desired order in the second array.
function threeNumberSort(array, order) {
  for (let i = 0; i< array.length; i++) {
    let right = array.length-1;
    if (array[i] === order[1]) {
      while (i<=right) {
        if (array[right] === order[0]) {
          swap(i,right,array)
        } 
          right --;
      }
    }
    else if (array[i] === order[2]) {
        while (i<=right) {
          if (array[right] === order[0]) {
             swap(i,right,array)
          }
          else if (array[right] === order[1]) {
              swap(i,right,array)
              let subRight = right;
              while (i<subRight) {
                if (array[right] === order[0]) {
                 swap(i,right,array)
                 } subRight --;
              }
          }
          right --;
        }
      }
    } return array;
  }

function swap (i,j,array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
