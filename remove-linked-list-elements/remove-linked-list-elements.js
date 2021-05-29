/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let newHead = head;
  let temp;
  
  while (head) {
    if (newHead.val === val) {
      newHead = newHead.next;
    } else if (head.val === val) {
      temp.next = head.next;
    } else {
      temp = head;
    }
    
    head = head.next;
  }
  
  return newHead;
};