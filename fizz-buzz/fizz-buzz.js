/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = new Array(n);
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) result[i - 1] = String(i);
    else if (i % 3 === 0 && i % 5 === 0) result[i - 1] = 'FizzBuzz';
    else if (i % 3 === 0) result[i - 1] = 'Fizz';
    else result[i - 1] = 'Buzz'
  }
  
  return result;
};