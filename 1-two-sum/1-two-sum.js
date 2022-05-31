/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const memo = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (memo.get(target - nums[i]) !== undefined) 
            return [memo.get(target - nums[i]), i];
        memo.set(nums[i], i);
    }
};