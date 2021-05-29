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
var deleteDuplicates = function(head) {
  let newHead = head;
  let prev = head;
  if (head) {
    head = head.next;
  }
  
  while (head) {
    if (head.val === prev.val) {
      prev.next = head.next;
    } else {
      prev = head;
    }
    
    head = head.next;
  }
    
  return newHead;
};