/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dict = {};
    
    for (let num of nums) {
        if (dict[num]) {
            return true;
        } else {
            dict[num] = 1;
        }
    }
    
    return false;
};