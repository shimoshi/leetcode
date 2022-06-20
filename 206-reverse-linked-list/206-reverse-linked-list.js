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
    if (!head) {
        return null;
    }
    
    let prev = null;
    let curr = head;
    head = head.next;
    curr.next = prev;
    
    while (head) {
        prev = curr;
        curr = head;
        head = head.next;
        curr.next = prev;
    }
    
    return curr;
};