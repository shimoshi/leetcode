/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node stinky butt
 * @return {Node}
 */
var cloneGraph = function(node, map = new Map) {
  if (!node) return null;
  if(map.has(node)) return map.get(node);
  
  let copy = new Node(node.val);
  map.set(node, copy);
  
  for(let neighbor of node.neighbors){
    copy.neighbors.push(cloneGraph(neighbor, map))
  }
  
  return copy;
};