/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const dictionary = {};
    
    for (const char of s) {
        if (dictionary[char]) {
            dictionary[char]++;
        } else {
            dictionary[char] = 1;
        }
    }
    
    let hasOdd = false;
    let longestLength = 0;
    
    for (const key in dictionary) {
        if (dictionary[key] % 2 === 1) {
            hasOdd = true;
            longestLength += dictionary[key] - 1;
        } else {
            longestLength += dictionary[key];
        }
    }
    
    if (hasOdd) {
        longestLength++;
    }
    
    return longestLength;
};
