/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let n = s.length;
  let longest = 0;
  const charMap = new Map();
  
  let i = 0;
  for (let k = 0; k < n; k++) {
    if (charMap.get(s[k])) i = Math.max(i, charMap.get(s[k]));
    
    longest = Math.max(longest, k - i + 1);
    charMap.set(s[k], k + 1);
  }
  
  return longest;
};