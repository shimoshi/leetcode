/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false
  if (!head.next) return false;
  
  var tortoise = head;
  var hare = head;
  
  while (hare) {
    if (hare.next) hare = hare.next;
    
    if (hare === tortoise) return true;
    
    tortoise = tortoise.next;
    if (hare.next) hare = hare.next;
    else return false;
  }
  
  return false;
};