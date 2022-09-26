//string: "babc"
// {
//  "c" : {"*": true},
//  "b" : {
//    "c" : {"*": true},
//    "a" : {"b" : {"c" : {"*" : true}}},
//  },
//  "a" : {"b" : {"c" : {"*" : true}}},
// }
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // Write your code here.
    for (let i=0; i<string.length; i++) {
     this.populateSuffixTrieAt(string, i);
    }
  }
    
  populateSuffixTrieAt(string, i) {
    let node = this.root;
    for (let j=i; j<string.length; j++) {
      if (!node[string[j]]) {
        node[string[j]] = {};
      }
      node = node[string[j]];
    }
    node[this.endSymbol] = true;
  }
  contains(string) {
    // Write your code here.
    let node = this.root;
    for (let i=0; i<string.length; i++) {
      if (!node[string[i]]) {
        return false;
      }
      node = node[string[i]];
    }
    return node[this.endSymbol] === true;
  }
}
