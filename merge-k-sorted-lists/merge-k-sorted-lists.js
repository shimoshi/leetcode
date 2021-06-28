/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null;
  }
  
  while (lists.length > 1) {
    let newList = [];
    
    for (let i = 0; i < lists.length; i+=2) {
      newList.push(mergeTwoLists(lists[i], lists[i + 1]));
    }
    
    lists = newList;
  }
  
  return lists[0] ? lists[0] : null;
  
  function mergeTwoLists(l1, l2) {
    let list = new ListNode();
    let head = list;

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        list.next =  new ListNode(l1.val);
        l1 = l1.next;
      } else {
        list.next =  new ListNode(l2.val);
        l2 = l2.next;
      }

      list = list.next;
    }

    if (!l1) {
      list.next = l2;
    } else if (!l2) {
      list.next = l1;
    }

    return head.next;
  };
};