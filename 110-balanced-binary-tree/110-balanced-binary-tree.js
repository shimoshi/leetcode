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
var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    
    let left = -1;
    let right = -1;
    
    if (root.left) {
        if (isBalanced(root.left)) {
            left = root.left.height;
        } else {
            return false;
        };
    }
    
    if (root.right) {
        if(isBalanced(root.right)) {
            right = root.right.height;
        } else {
            return false;
        };
    }
    
    root.height = Math.max(left, right) + 1;
    
    return Math.abs(left - right) <= 1;
}
    