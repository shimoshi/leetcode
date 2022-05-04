/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let result = nums[0];
  let temp = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (temp < 0) temp = nums[i];
    else temp += nums[i];
    
    if (temp > result) result = temp;
  }
  
  return result;
};