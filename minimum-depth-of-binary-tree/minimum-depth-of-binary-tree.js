/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root, length = 1, shortest = Number.MAX_SAFE_INTEGER) {
  if (root === null) {
    return 0;
  }

  
  if (root.left === null && root.right === null) {
    return length;
  }
  
  let left = minDepth(root.left, length + 1)
  if (left > 0 && left < shortest) {
    shortest = left;
  }
  
  let right = minDepth(root.right, length + 1)
  if (right > 0 && right < shortest) {
    shortest = right;
  }
    
  return shortest;
};