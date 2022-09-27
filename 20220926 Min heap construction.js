//MinHeap class support:
// building a min heap from an input array of integers
// insert integers in the heap
// remove the heap's minimum/root value
// peeking at the heap's minimum/root value
// sift integers up and down the heap, which is to be used when inserting and removing values

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
    const firstParentInd = Math.floor((array.length-2)/2);
    for (let currentInd = firstParentInd; currentInd >= 0; currentInd --) {
      this.siftDown(currentInd, array.length-1, array);
    }
    return array;
  }

  siftDown(currentInd, endInd, heap) {
    // Write your code here.
    let childOneInd = currentInd*2 +1;
    while(childOneInd <= endInd) {
      const childTwoInd = currentInd *2 + 2 <= endInd ? currentInd*2+2 : -1;
      let indToSwap;
      if (childTwoInd !== -1 && heap[childTwoInd] < heap[childOneInd]) {
        indToSwap = childTwoInd;
      }
      else {
        indToSwap = childOneInd;
      }
      if (heap[indToSwap] < heap[currentInd]) {
        this.swap(currentInd, indToSwap, heap);
        currentInd = indToSwap;
        childOneInd = currentInd *2 +1;
      }
      else {
        return;
      }
    }
  }

  siftUp(currentInd, heap) {
    // Write your code here.
    let parentInd = Math.floor((currentInd -1)/2);
    while(currentInd > 0 && heap[currentInd] < heap[parentInd]) {
      this.swap(currentInd,parentInd, heap);
      currentInd = parentInd;
      parentInd = Math.floor((currentInd-1)/2);
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0];
  }

  remove() {
    // Write your code here.
    this.swap(0, this.heap.length-1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length-1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    // Write your code here.
    this.heap.push(value);
    this.siftUp(this.heap.length-1, this.heap);
  }
  swap(i,j,heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
}
