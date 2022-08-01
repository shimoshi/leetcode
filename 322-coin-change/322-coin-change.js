/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, memo = {}) {
    const cache = Array(amount + 1);
  cache.fill(amount + 1);
  cache[0] = 0;

  for (let total = 1; total <= amount; total++) {
    for (const coin of coins) {
      if (coin <= total) {
        cache[total] = Math.min(cache[total], cache[total - coin] + 1);
      }
    }
  }

  return cache[amount] > amount ? -1 : cache[amount];
};