// @medium
var addTwoNumbers = function (l1, l2) {
  let node1 = l1
  let node2 = l2
  let extra = 0
  let sum = 0

  const sumNodeHead = new ListNode(null)
  let sumNode = sumNodeHead
  while (node1 || node2 || sum > 0) {
    if (node1) {
      sum = sum + node1.val
    }
    if (node2) {
      sum = sum + node2.val
    }
    if (sum >= 10) {
      extra = 1
      sum = sum - 10
    }

    node1 = node1?.next
    node2 = node2?.next
    sumNode.next = new ListNode(sum)
    sumNode = sumNode.next
    sum = extra
    extra = 0
  }

  return sumNodeHead.next
}
