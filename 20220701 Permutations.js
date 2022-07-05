//write a function that takes in an array of unique integers and returns an array of all permutations of those intergers with no particular order.
//sample input: [1,2,3].  sample output:[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function getPermutations(array) {
  return addPermutations(array,[],[]);
}
function addPermutations(array,holder,permutations) {
  if (array.length ===1) {
    permutations.push(array.concat(holder));
    console.log('length1 array:', array);
    console.log('length1 permutations:', permutations);
    return permutations;
  }
    for (let number of array) {
      const duplicatedReducedArray = [...array].filter(singleNum => singleNum !== number);
      addedHolder= holder.concat(number);
      console.log("array", duplicatedReducedArray);
      console.log("holder", addedHolder);
      addPermutations(duplicatedReducedArray,addedHolder,permutations);
    } return permutations;
}
