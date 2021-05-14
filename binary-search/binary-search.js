/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let max = nums.length - 1;
  let min = 0;
  
  while (max >= min) {
    let mid = Math.floor((max + min) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      max = mid - 1;
    } else if (nums[mid] < target) {
      min = mid + 1;
    }
  }
  
  return -1;
};