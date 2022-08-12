//given three inputs, all of which are instances of an AncestralTree class that have an ancestor property pointing to their youngest ancestor.
//the first input is the top ancestor in an ancestral tree, the other two inputs are descendants in the ancestral tree.
//write a function that returns the youngest common ancestor to the two descendants.

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const traverseOne = traverse(descendantOne,[]);
  const traverseTwo = traverse(descendantTwo,[]);
  // const commonNodes = traverseOne.filter(item=> traverseTwo.includes(item));
  // return commonNodes[0];
  for (let i=0; i<traverseOne.length; i++) {
    for (let j=0; j<traverseTwo.length; j++) {
      if (traverseOne[i].name === traverseTwo[j].name) {   
        return traverseOne[i];
      }
    }
  }
}

function traverse(descendant,array=[]) {
  if (descendant === null) {
    return array;
  }
  array.push(descendant);
  return traverse(descendant.ancestor,array);
}
