//write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order
function reverseWordsInString(string) {
  const words = string.split(' ');
  let result=[];
  for (let i=0; i<words.length; i++) {
    result.push(words[words.length-1-i]);
  }
  return result.join(' ');
}
