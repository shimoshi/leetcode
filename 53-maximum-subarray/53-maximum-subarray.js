/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let sum = maxSum;
    
    for (let i = 1; i < nums.length; i++) {
        if (sum < 0) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }
        
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    
    return maxSum;
};