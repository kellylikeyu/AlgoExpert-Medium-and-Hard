//given two linked list of potentially unequal length. each linked list represents a non-negative integer, where each node in the linked list is a digit of that integer, 
//and the first node in each linked list always represents the least significant digit of the interger. 
//write a function that returns the head of a new linked list that represents the sum of the integers represented by the two input linked list.
//sample input: linkedListOne = 2 -> 4 -> 7 -> 1
//              linkedListTwo = 9 -> 4 -> 5
//sample output:                1 -> 9 -> 2 -> 2
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let sumList = new LinkedList(0);
  let tenStorage = 0;
  let currentNode = sumList;
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  while (nodeOne !== null || nodeTwo !== null || tenStorage !== 0) {
    const valueOne = nodeOne!==null? nodeOne.value:0;
    const valueTwo = nodeTwo!==null? nodeTwo.value:0;
    let sum = valueOne + valueTwo + tenStorage;
    let newNode = new LinkedList(sum % 10);
    currentNode.next = newNode;
    currentNode = newNode;
    tenStorage = sum>9 ? 1: 0;
    // tenStorage = Math.floor(sum/10);
    nodeOne = nodeOne!==null? nodeOne.next: null;
    nodeTwo = nodeTwo!==null? nodeTwo.next: null;

  }

  return sumList.next;
}
