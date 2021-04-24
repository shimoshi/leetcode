/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = [];
  const dict = {};
  
  for (let num of nums) {
    if (dict[num]) {
      result.push(num);
    } else {
      dict[num] = 1;
    }
  }
  
  return result;
};