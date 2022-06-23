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
var maxDepth = function(root) {
    let depth = 0;
    
    DFS(root);
    
    return depth;
    
    function DFS(root) {
        if (!root) {
            return 0;
        }
        
        const left = 1 + DFS(root.left);
        const right = 1 + DFS(root.right);
        
        depth = Math.max(depth, left, right);
        
        return Math.max(left, right);
    }
};