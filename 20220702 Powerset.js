//write a function that takes in an arry of unique intergers and returns its powerset
//the powerset P(X) of a set X is the set of all subsets of X. 
//sample input: array=[1,2,3]  sample output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
function powerset(array) {
  let powerset = powersetHelper(array, []);
  //below is to remove duplicate element in an array. all elements are an array
  let hashMap = {}
  powerset.forEach(function(arr){
    // If your subArrays can be in any order, you can use .sort to have consistant order
    hashMap[arr.join("|")] = arr;});
  let result = Object.keys(hashMap).map(function(k){return hashMap[k]})
  if(array.length !==0) {result.push([])};
  return result;
}
function powersetHelper(array, setArray) {
  if (array.length ===0) {
    setArray.push([]);
    return setArray;
  }
  if (array.length ===1) {
    setArray.push([array[0]]);
    }
  if (array.length>1){
   setArray.push(array);  
  for (let number of array) {
    let duplicatedReducedArray = [...array].filter(num => num !== number);
    powersetHelper(duplicatedReducedArray, setArray)
  }
  }
 return setArray;
}
