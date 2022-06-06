/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const memo = {};
    
    for (let char of s) {
        if (memo[char]) {
            memo[char]++;
        } else {
            memo[char] = 1;
        }
    }
    
    for (let char of t) {
        if (memo[char]) {
            memo[char]--;
        } else if (memo[char] <= 0) {
            return false;
        } else {
            return false;
        }
    }
    
   return true;
}