/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let largest = Math.min(height[left], height[right]) * (right - left);
  
  while (left < right) {
    let curr = Math.min(height[left], height[right]) * (right - left);
    largest = curr > largest ? curr : largest;
    
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  
  return largest;
};