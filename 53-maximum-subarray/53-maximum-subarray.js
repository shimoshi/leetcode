/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let sum = maxSum;
    
    
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        
        if (sum < nums[i]) {
            sum = nums[i];
        }
        
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    
    return maxSum;
};