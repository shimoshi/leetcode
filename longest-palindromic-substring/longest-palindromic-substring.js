/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = s[0];
  
  for (let i = 0; i < s.length; i++) {
    let temp = spreadOut(i);
    longest = temp.length > longest.length ? temp : longest;
  }
  
  return longest;
  
  function spreadOut(index) {
    let left = index - 1;
    let right = index + 1;
    let substr = s[index];
    
    while (s[index] === s[right]) {
      substr += s[right];
      right++;
    }
    
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        substr = s[left] + substr + s[right];
        left--;
        right++;
      } else {
        break;
      }
    }
    
    return substr;
  }
};