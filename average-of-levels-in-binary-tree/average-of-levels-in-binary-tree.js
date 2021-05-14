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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const result = [];
  const count = [];
  
  innerfunction(root, 0, count, result);
  
  for (let i = 0; i < result.length; i++) {
    result[i] /= count[i];
  }
  
  return result;

  function innerfunction(tree, level, count, sum) {
    if (tree === null) {
      return;
    }
    
    if (level < sum.length) {
      count[level]++;
      sum[level] += tree.val;
    } else {
      count[level] = 1;
      sum[level] = tree.val;
    }
    
    innerfunction(tree.left, level + 1, count, sum);
    innerfunction(tree.right, level + 1, count, sum);
  }
};