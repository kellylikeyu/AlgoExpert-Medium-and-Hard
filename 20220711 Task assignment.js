// given an integer k representing a number of workers and an array of positive integers representing durations of tasks that must be completed by the workers.
//each worker must complete two unique tasks and can only work on one task at a time. the number of tasks will always be equal to 2k.
//write a function that returns the optimal assignment of tasks to each worker such that the tasks are completed as fast as possible.
//return a list of pairs, where each pairs stores the indices of the tasks that should be completed by one worker
// Use greedy algorithm. To optimize assignment, a worker should be assigned a current most slow and fast assignments, and these two tasks should be removed from tasks list.
function taskAssignment(k, tasks) {
  let taskPairs = [];
  
  const sortedTasks = [...tasks].sort((a,b) => a-b);
  for (let i=0; i<sortedTasks.length/2; i++) {
    let slow=sortedTasks[i];
    let fast=sortedTasks[sortedTasks.length-1-i];

    let slowInd = tasks.indexOf(slow);
    let fastInd = tasks.indexOf(fast);
    
    let pairs = [slowInd,fastInd];
    taskPairs.push(pairs);
    tasks[slowInd] = -Infinity;
    tasks[fastInd] = -Infinity;
  }
  return taskPairs;
}
