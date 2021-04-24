/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const dict = {};
  
  for (let num of nums) {
    if (dict[num]) {
      return num;
    } else {
      dict[num] = 1;
    }
  }
};