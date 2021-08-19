/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {0: 0, 1: 1, 2: 1}) {
  if (memo.hasOwnProperty(n)) return memo[n];
  
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  
  return memo[n];
};