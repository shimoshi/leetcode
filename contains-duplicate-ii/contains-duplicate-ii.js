/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; Math.abs(i - j) <= k; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
    
  return false;
};