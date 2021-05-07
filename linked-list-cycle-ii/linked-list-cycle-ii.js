/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null) return null;
  
  let ptr1 = head;
  let ptr2 = null;
  let slow = head;
  
  while (head) {
    head = head.next;
    slow = slow.next;
    
    if (head) {
      head = head.next;
    }
    
    if (head === slow) {
      ptr2 = head;
      break;
    }
  }
  
  while (ptr1 && ptr2 && ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  
  return ptr2;
};