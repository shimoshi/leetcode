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
    if (!root) {
        return 0;
    }
    
    let depth = 1;
    
    DFS(root);
    
    return depth;
    
    function DFS(root) {
        if (!root) {
            return 0;
        }
        
        const left = DFS(root.left) + 1;
        const right = DFS(root.right) + 1;
        
        depth = Math.max(depth, left, right);
        
        return Math.max(left, right);
    }
};