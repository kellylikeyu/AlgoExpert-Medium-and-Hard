//write a function that takes in an array of strings and groups anagrams together. "cinema" and "iceman"are anagrams.
//sample input:['yo','act','flop','tac','foo','cat','oy','olfp']   output:[['yo','oy'],['flop','olfp'],['act','tac','cat'],['foo']]
function groupAnagrams(words) {
  let anagramsGroup = {};
  let result = [];
  const wordsGroup = words.map(word => {return word.split('').sort().join('');})

  for (let i=0; i<words.length; i++) {
    if (!anagramsGroup[wordsGroup[i]]) {
      anagramsGroup[wordsGroup[i]] = [words[i]];
    } else {
      anagramsGroup[wordsGroup[i]].push(words[i]);
    }
  }
  for (let anagrams of Object.keys(anagramsGroup)) {
    result.push(anagramsGroup[anagrams]);
  }
  return result;
}
