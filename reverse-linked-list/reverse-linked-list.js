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
var reverseList = function(head) {
  let prev = null;
  let temp;
  
  if (head) {
    temp = head.next;
  }
  
  while (head) {
    head.next = prev;
    prev = head;
    head = temp;
    
    if (temp) {
      temp = temp.next;
    }
  }

  return prev;
};