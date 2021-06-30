/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let targetIndex = -1;
  let offset = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      targetIndex = i;
    }
    
    offset++;
  }
  
  return targetIndex !== -1 ? targetIndex : -1;
};