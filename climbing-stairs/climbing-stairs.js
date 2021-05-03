/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, step = 0, memo = {}) {
  if (memo[step]) {
    return memo[step];
  } else if (step > n) {
    return 0;
  } else if (step === n) {
    return 1;
  }
  
  let count = 0;
  
  count += climbStairs(n, step + 1, memo);
  count += climbStairs(n, step + 2, memo);
  
  memo[step] = count;
  
  return count;
};