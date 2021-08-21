/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(nums, target) {
  const result = []
  
  backtrack([], target, 0);
  
  return result;
  
  function backtrack(list, rem, index) {
    if (rem < 0) return;
    else if (rem === 0) result.push([...list]);
    else {
      for (let i = index; i < nums.length; i++) {
        list.push(nums[i]);
        backtrack(list, rem - nums[i], i);
        list.pop();
      }
    }
  }
};