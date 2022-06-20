/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major = null;
    let count = 0;
    
    for (let num of nums) {
        if (count === 0) {
            major = num;
        }
        
        if (num === major) {
            count++;
        } else {
            count--;
        }
    }
    
    return major;
};