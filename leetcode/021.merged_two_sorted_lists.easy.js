// @easy
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let head1 = list1
  let head2 = list2

  const merged = new ListNode(0)
  let node = merged
  while (head1 && head2) {
    if (head1.val < head2.val) {
      node.next = new ListNode(head1.val)
      head1 = head1.next
    } else {
      node.next = new ListNode(head2.val)
      head2 = head2.next
    }
    node = node.next
  }
  if (head1) {
    node.next = head1
  } else {
    node.next = head2
  }

  return merged.next // skip first node where val = 0
};