/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;
  let min = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > result) {
      result = prices[i] - min;
    }
  }
  
  return result;
};