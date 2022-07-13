class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    let queue = [this];
    while (queue.length >0) {
      const current = queue.shift();
      array.push(current.name);
      queue = queue.concat(current.children);
    }
    return array;
  }
}
