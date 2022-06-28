//write a functon that takes in an array of words and returns the smallest array of characters needed to form all of the words.
//sample input: ['this','that','did','deed','them!','a']
//sample output: ['t','h','i','s','a','t','d','d','e','e','m','!']
function minimumCharactersForWords(words) {
  let minimumCharacters = [];
  
  for (let word of words) {
    let storage = [...minimumCharacters];
    for (let letter of word) {
      if (!storage.includes(letter)) {
        minimumCharacters.push(letter);
      }
      else {
        storage.splice(storage.indexOf(letter),1);
      }
    }
  }
  return minimumCharacters;
}
