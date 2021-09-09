/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, step = 0, memo = {}) {
  if (step in memo) return memo[step];
  if (step > n) return 0;
  if (step === n) return 1;
  
  memo[step] = climbStairs(n, step + 1, memo) + climbStairs(n, step + 2, memo);
  
  return memo[step];
};