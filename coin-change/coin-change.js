/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const cache = Array(amount + 1);
  cache.fill(amount + 1);
  cache[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        cache[i] = Math.min(cache[i], cache[i - coins[j]] + 1);
      }
    }
  }

  return cache[amount] > amount ? -1 : cache[amount];
};