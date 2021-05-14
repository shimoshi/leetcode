/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let max = nums.length - 1;
  let min = 0;
  
  while (max >= min) {
    let curr = Math.floor((max + min) / 2);
    
    if (nums[curr] === target) {
      return curr;
    } else if (nums[curr] > target) {
      max = curr - 1;
    } else if (nums[curr] < target) {
      min = curr + 1;
    }
  }
  
  return -1;
};