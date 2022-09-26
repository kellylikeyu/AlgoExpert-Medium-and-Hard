//The class support inserting, removing, searching.

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
		if (value < this.value) {
			if (!this.left) {
				this.left = new BST(value);
			}
			else {
				this.left.insert(value);
			}
		}
		else {
			if(!this.right) {
				this.right = new BST(value);
			}
			else {
				this.right.insert(value);
			}
		}
    return this;
  }

  contains(value) {
    // Write your code here.
	let current = this;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      }
      else if (value > current.value) {
        current = current.right;
      }
      else {
        return true;
      }
    }
    return false;
  }

  remove(value, parent = null) {
    // Write your code here.
    let current = this;

    while(current !== null) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      }
      else if (value > current.value) {
        parent = current;
        current = current.right;
      }
      else {
        current.shuffleNodes(current,parent);
        break;
      }
    }
    return this;
  }
	shuffleNodes (current, parent) {
      const leftNodeExists = current.left !== null;
      const rightNodeExists = current.right !== null;
      if (leftNodeExists && rightNodeExists) {
        current.value = current.right.getMinValue();
        current.right.remove(current.value, current);
      }
      else if (parent === null) {
        if (leftNodeExists) {
          current.value = current.left.value;
          current.right = current.left.right;
          current.left = current.left.left;
        }
        else if (rightNodeExists) {
          current.value = current.right.value;
          current.left = current.right.left;
          current.right = current.right.right;
        }
        else {
          //This is a single node tree.
        }
      }
      else if (parent.left === current) {
        parent.left = leftNodeExists? current.left : current.right;
      }
      else if (parent.right === current) {
        parent.right = leftNodeExists ? current.left : current.right;
      }
    }
  getMinValue() {
    let current = this;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
}
