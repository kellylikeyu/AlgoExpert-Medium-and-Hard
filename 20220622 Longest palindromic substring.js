//write a function that given a string, return its longest palindromic substring.
function longestPalindromicSubstring(string) {
  let longest = '';
  for (let i=0; i<string.length; i++) {
    for (let j=i; j< string.length; j++) {
      const substring = string.slice(i, j+1);
      if (substring.length > longest.length && isPalindromic(substring)) {
        longest = substring;
      }
    }
  }
 return longest;
}
function isPalindromic(string) {
  let left =0;
  let right = string.length-1;
  while(left < right) {
    if (string[left] !== string[right]) {
      return false;
    } else {left ++; right --;}
  } return true;
}
