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
 * @return {boolean}
 */
var isValidBST = function(root, lowerlimit = Number.MIN_SAFE_INTEGER, upperlimit = Number.MAX_SAFE_INTEGER) {
  if (root.left) {
    if (root.left.val >= root.val || root.left.val <= lowerlimit) {
      return false;
    } else {
      if (isValidBST(root.left, lowerlimit, root.val) === false) {
        return false;
      }
    }
  }
  
  if (root.right) {
    if (root.right.val <= root.val || root.right.val >= upperlimit) {
      return false;
    } else {
      if (isValidBST(root.right, root.val, upperlimit) === false) {
        return false;
      }
    }
  }
  
  return true;
};