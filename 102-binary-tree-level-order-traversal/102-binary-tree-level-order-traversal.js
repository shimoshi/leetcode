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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    
    if (!root) {
        return result;
    }
    
    const queue = [root, null];
    const level = [];
    
    while (queue.length) {
        const node = queue.shift();
        
        if (!node) {
            result.push(level.splice(0, level.length));
            
            if (queue.length) {
                queue.push(null);
            }
            
            continue;
        }
        
        level.push(node.val);
        
        if (node.left) {
            queue.push(node.left);
        }
        
        if (node.right) {
            queue.push(node.right);
        }
    }
    
    return result;
};