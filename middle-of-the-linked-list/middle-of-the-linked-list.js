/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = head;
  head = head.next;
  
  while (head) {
    head = head.next;
    slow = slow.next;
    
    if (head) {
      head = head.next;
    }
  }
  
  return slow;
};