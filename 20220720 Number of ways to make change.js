//given an arry of distince positive integers representing coin denominations and a single non-negative integer n representing a target amount of money.
//write a function that returns the number of ways to make change for that target amount using the given coin denominations.
//dynamic programming

function numberOfWaysToMakeChange(n, denoms) {
  let ways = new Array(n+1).fill(0);
  ways[0] = 1;
  for (let denom of denoms) {
    let amount = 0;
    while (amount<=n) {
      if (denom <= amount) {
            ways[amount] += ways[amount-denom];
          }
      amount ++;
    }
  }
  return ways[n];
}
