/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const dict = {};
    
    for (const char of s) {
        if (dict[char]) {
            dict[char]++;
        } else {
            dict[char] = 1;
        }
    }
    
    let result = 0;
    
    for (const char in dict) {
        result += Math.floor(dict[char] / 2) * 2;
    
        if (result % 2 === 0 && dict[char] % 2 === 1) {
            result++;
        }
    }
    
    return result;
};
