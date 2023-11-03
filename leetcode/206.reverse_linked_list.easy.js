// @easy
// attempt 1 - my usual go to when reviewing, however this is obviously not optimal
// var reverseList = function(head) {
//   const list = []
  
//   let node = head
//   while(node) {
//     list.push(node.val)
//     node = node.next
//   }

//   let reversed = head
//   while(list.length) {
//     reversed.val = list.pop()
//     reversed = reversed.next
//   }

//   return head
// };

// Mostly got it without help
// my main issue is that I forgot to break the cycle at the end
var reverseList = function(head) {
  if (!head) {
    return head
  }

  let next = head.next
  let node = next
  let prev = head

  while(node) {
    next = node.next
    node.next = prev
    prev = node
    node = next
  }
  // break the cycle where the last node is now the first now, pointing to the 2nd node
  head.next = null 
  return prev
};