/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const dict = {};
    let longest = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]]) {
            start = Math.max(start, dict[s[i]]);
        }
        
        dict[s[i]] = i + 1;
        longest = Math.max(longest, i - start + 1)
    }
    
    return longest;
};