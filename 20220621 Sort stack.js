//write a function that takes in an array of integers representing a stack, recursively sorts the stack.
function sortStack(stack) {
  let reverseStack = []
  while (stack.length >= 1) {
      reverseStack.push(stack.pop())
  }
  while (reverseStack.length !== 0) {
      insert (reverseStack.pop())
  }
function insert(newItem) {
  let temporaryBucket = []
  while (stack.length !==0 )
  {    
      if (stack[stack.length-1] > newItem) {temporaryBucket.push(stack.pop())} else {break}
  }
  stack.push(newItem)
  while (temporaryBucket.length !==0) {stack.push(temporaryBucket.pop())}
    }
  return stack
  }
