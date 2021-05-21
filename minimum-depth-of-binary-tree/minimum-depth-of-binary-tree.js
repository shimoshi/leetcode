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
var minDepth = function(root, length = 1) {
  if (root === null) {
    return 0;
  }
  
  if (root.left === null && root.right === null) {
    return length;
  }
  
  let shortest = Number.MAX_SAFE_INTEGER;
  
  if (root.left !== null) {
    shortest = Math.min(minDepth(root.left, length + 1), shortest);
  }
  
  if (root.right !== null) {
    shortest = Math.min(minDepth(root.right, length + 1), shortest);
  }
    
  return shortest;
};