//write a function that takes in a string made up of brackets(), [], {}. and other optional characters.
//return a boolean representing whether the string is balanced with regards to brackets.
function balancedBrackets(string) {
  let storage = [];
  const pairs = {'(':')','[':']','{':'}'};
  for (let bracket of string) {
    if (['(','[','{'].includes(bracket)) {
      storage.push(bracket);
    }
    else if ([')',']','}'].includes(bracket)) {
      if (storage.length === 0) {return false;}
      if (pairs[storage[storage.length-1]] !== bracket) {
        return false;
      } else {
        storage.pop();
      }
    }
  }
  return storage.length === 0;
}
