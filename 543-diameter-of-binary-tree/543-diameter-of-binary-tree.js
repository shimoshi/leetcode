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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    DFS(root);
    
    return diameter;
    
    function DFS(root) {
        if (!root) {
            return 0;
        }
        
        const left = DFS(root.left);
        const right = DFS(root.right);
        
        diameter = Math.max(diameter, left + right);
        
        return 1 + Math.max(left, right);
    }
};