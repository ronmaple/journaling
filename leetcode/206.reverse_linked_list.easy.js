// @easy
// attempt 1 - my usual go to when reviewing, however this is obviously not optimal
var reverseList = function(head) {
  const list = []
  
  let node = head
  while(node) {
    list.push(node.val)
    node = node.next
  }

  let reversed = head
  while(list.length) {
    reversed.val = list.pop()
    reversed = reversed.next
  }

  return head
};