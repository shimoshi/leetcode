/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];
    
    for (let price of prices) {
        if (price - buy > profit) {
            profit = price - buy;
        }
        
        if (price < buy) {
            buy = price;
        }
    }
    
    return profit;
};