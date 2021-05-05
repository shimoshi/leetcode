/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  innerFunction([], 0);
  
  function innerFunction(ss, index) {
    result.push(ss);
    
    for (let i = index; i < nums.length; i++) {
      innerFunction(ss.concat(nums[i]), i + 1);
    }
  }
  
  return result;
};