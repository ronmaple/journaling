// @medium
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head
  let fast = head
  while (n--) {
    fast = fast.next
  }
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next
  }

  if (!fast) {
    // edge case where fast is the first node
    head = head.next
  } else {
    // next position is the nth node, skip it
    slow.next = slow.next.next
  }

  return head
}
// start traversing through slow pointer once fast pointer is n nodes ahead
// once faster pointer hits the end, slow pointer will be n nodes to the end
// point the slow pointer to the fast pointer
