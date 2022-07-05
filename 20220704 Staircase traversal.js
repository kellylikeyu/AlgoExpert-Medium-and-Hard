//given two positive integers representing the height of a staircase and the max number of steps that you can advance up the staircase at a time.
//write a function that returns the number of ways in which you can climb the staircase.
//sample input: height =4, maxSteps = 2   sample output : 5   //1,1,1,1 | 1,1,2 | 1,2,1 | 2,1,1 | 2,2
function staircaseTraversal(height, maxSteps) {
  //for height(h), steps(s), number of ways(N)
  //N[h,s] = N[h-1,s] + N[h-2,s] +...+ N[h-s,s]
  let steps=0;
  if (height===0 || height ===1) {steps= 1;}
  else{
    let min = Math.min(height,maxSteps);
    for (let i=1; i<=min;i++) {
      steps += staircaseTraversal(height-i,maxSteps);
    }
  }
  return steps;
}
