//given an array of positive integers representing coin denominatoions and a single non-negative integer n representing a target amount of meney,
//wirte a function that returns the smallest number of coins needed to make change for that targe amount using the given coin denominations.

function minNumberOfCoinsForChange(n, denoms) {
  let coinNumber = new Array(n + 1).fill(Infinity);
  coinNumber[0] = 0;
   for (let denom of denoms) {
    for (let amount=0; amount< n+1; amount++) {
       if (denom <= amount) {
         coinNumber[amount] = Math.min(coinNumber[amount-denom]+1, coinNumber[amount]);
         }
      }
   }
 return coinNumber[n] === Infinity? -1 : coinNumber[n];
}
