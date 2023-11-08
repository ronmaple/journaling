// @easy
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }

  let tortoise = head
  let hare = head.next

  while (hare && hare.next) {
    // same reference in memory
    if (tortoise === hare) { 
      return true
    }
    tortoise = tortoise.next
    hare = hare.next.next
  }

  return false
};