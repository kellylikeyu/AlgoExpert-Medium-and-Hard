//write a minmaxstack class for a Min Max stack.
class MinMaxStack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack[0];
  }

  pop() {
    return this.stack.shift();
  }

  push(number) {
    this.stack.unshift(number);
  }

  getMin() {
    return Math.min(...this.stack);
  }

  getMax() {
    return Math.max(...this.stack);
  }
}
