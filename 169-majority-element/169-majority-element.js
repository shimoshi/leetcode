/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major = nums[0];
    let count = 0;
    
    for (let num of nums) {
        if (num === major) {
            count++;
        } else {
            count--;
        }
        
        if (count === 0) {
            major = num;
            count = 1;
        }
    }
    
    return major
};