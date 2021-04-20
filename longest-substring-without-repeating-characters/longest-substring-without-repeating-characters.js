/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s === '') return 0;
  
  let sub = '';
  let longest = sub.length;
  let index = 0;
  
  while (index < s.length) {
    if (sub.includes(s[index])) {
      for (let i = 0; i < sub.length; i++) {
        if (s[index] === sub[i]) {
          sub = sub.slice(1);
          index--;
          break;
        }
      }
    } else {
      sub += s[index];
      if (sub.length > longest) {
        longest = sub.length;
      }
    }
    index++;
  }
  
  return longest;
};