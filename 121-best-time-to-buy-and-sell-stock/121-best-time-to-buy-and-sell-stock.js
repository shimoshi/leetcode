/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices.shift();
    
    for (let price of prices) {
        if (price < buy) {
            buy = price;
        } else if (price - buy > profit) {
            profit = price - buy;
        }
    }
    
    return profit;
};