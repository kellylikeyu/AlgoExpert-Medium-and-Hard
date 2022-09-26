//imagine that you are a teacher who's just graded the final exam in a class. you have a list of student scores on the final exam in a particular order, and you want to reward your students.
//you decide to do so fairly by giving them arbitrary rewards following two rules:
//1. all students must receive at least one reward
//2. any given student must receive strictly more rewards than an adjacent student with a lower score and must receive strictly fewer rewards than an adjacent student with a higher score.
//write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students to satisfy the two rules.

function minRewards(scores) {
  let rewards = scores.map(value => 1);
  for (let i=1; i<scores.length; i++) {
    if (scores[i] > scores[i-1]) {
      rewards[i] = rewards[i-1] + 1;
    }
  }
  for (let j=scores.length-2; j>=0; j--) {
    if (scores[j] > scores[j+1]) {
      rewards[j] = Math.max(rewards[j+1] + 1, rewards[j]);
    }
  }
  return rewards.reduce((a,b) => a+b);
}
