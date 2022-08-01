/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return null;
    
    
    let count = -1;
    
    for (const coin of coins) {
        const remainder = amount - coin;
        const remainderCount = coinChange(coins, remainder, memo);
        
        if (remainderCount !== null && remainderCount !== -1) {
            const combination = remainderCount + 1;
            if (count === -1 || combination < count) {
                count = combination;
            }
        }
    }
    
    memo[amount] = count;
    return count;
};