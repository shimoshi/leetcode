/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const dictionary = {};
    
    for (const char of magazine) {
        if (dictionary[char]) {
            dictionary[char]++;
        } else {
            dictionary[char] = 1;
        }
    }
    
    for (const char of ransomNote) {
        if (dictionary[char]) {
            dictionary[char]--;
        } else {
            return false;
        }
    }
    
    return true;
};