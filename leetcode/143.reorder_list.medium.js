// @medium
// Didn't need clues but the solution isn't great. Will try to improve it.
// 85ms 50.1mb
var reorderList = function (head) {
  const pos = []
  let node = head
  while (node) {
    const single = node
    node = node.next
    single.next = null
    pos.push(single)
  }
  node = head
  let i = 0
  while (i < pos.length - 1) {
    let last = pos.pop()
    node = pos[i]
    node.next = last
    last.next = pos[i + 1] || null
    i++
  }
};