/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums, pos = 0, memo = {}) {
//   if (pos === nums.length - 1) return true;
  
//   if (nums[pos] === 0) return false;

//   for (let i = 1; i <= nums[pos]; i++) {
//     if (memo[pos + i]) return true;
//     else memo[pos + i] = canJump(nums, pos + 1, memo);
//   }
  
//   return false;
// };

var canJump = function (nums, n = nums.length) {
  let maxLocation = 0;
  
  for(let i=0; i<nums.length; i++) {
    if(maxLocation<i) return false; 
    // if previous maxLocation smaller than i, meaning we cannot reach location i, thus return false.
    maxLocation = (i+nums[i]) > maxLocation ? i+nums[i] : maxLocation; // greedy:
  }
  
  return true;
}