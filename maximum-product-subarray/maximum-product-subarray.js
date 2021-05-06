/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let result = nums[0];
  let max = nums[0];
  let min = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let maxTemp = Math.max(nums[i], min * nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i], max * nums[i]);
    max = maxTemp;
    
    result = Math.max(result, max);
  }
  
  return result;
};