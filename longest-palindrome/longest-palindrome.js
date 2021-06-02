/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let count = {};
  
  for (let char of s) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
    
  }
  
  let result = 0;
  
  for (let char in count) {
    result += Math.floor(count[char] / 2) * 2;
    
    if (result % 2 === 0 && count[char] % 2 === 1) {
      result++;
    }
  }
  
  return result;
};