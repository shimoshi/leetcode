/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    
    let count = 0;
    let temp = nums[0];
    
    for (let num of nums) {
        if (temp === num) {
            count++;
            
            if (count > nums.length / 2) {
                return temp;
            }
        } else {
            count = 1;
            temp = num;
        }
    }
};