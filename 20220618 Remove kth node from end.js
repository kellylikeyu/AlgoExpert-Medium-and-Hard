//write a function that takes in the head of a singly linked list and an integer k and removes the kth  node from the end of the list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
	let tailSeeker = head;
	let nodeToRemovePrevious = head;
	let nodeToRemove = head;
	let count = 0;
	while (tailSeeker) {
		tailSeeker = tailSeeker.next;
		count ++;
		if (count > k) {
			nodeToRemovePrevious = nodeToRemove;
			nodeToRemove = nodeToRemove.next;
		}
	}
	
	if (nodeToRemove === head) {
		head.value = head.next.value;
		head.next = head.next.next;
	}
	else {
		nodeToRemovePrevious.next = nodeToRemove.next;
	}
}
