/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}, step = 0) {
    if (memo[step]) {
        return memo[step];
    }
    
    if (step === n) {
        return 1;
    }
    
    if (step > n) {
        return 0;
    }
    
    memo[step] = climbStairs(n, memo, step + 1) + climbStairs(n, memo, step + 2);
    
    
    return memo[step];
};