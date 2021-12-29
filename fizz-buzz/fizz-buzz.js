/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    result.push(i % 3 === 0 ? (i % 5 === 0 ? 'FizzBuzz' : 'Fizz') : (i % 5 === 0 ? 'Buzz' : String(i)));
  }
  
  return result;
};