/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  
  let result = [];
  
  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    if (nums[i - 1] === nums[i]) {
      continue;
    }
    
    let low = i + 1;
    let high = nums.length - 1;
    
    while (low < high) {
      const total = nums[i] + nums[low] + nums[high];
      
      if (total < 0) {
        low++;
      } else if (total > 0) {
        high--;
      } else {
        result.push([nums[i], nums[low++], nums[high--]]);
        while (nums[low] === nums[low - 1] && low < high) {
          low++;
        }
      }
    }
  }
  
  return result;
};