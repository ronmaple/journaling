// @easy
// opted for a BFS approach
var isSameTree = function (p, q) {
  if ((!p && q) || (p && !q)) {
    return false
  }
  if (!p && !q) {
    return true
  }
  const pQueue = [p]
  const qQueue = [q]

  while (pQueue.length || qQueue.length) {
    const nodeP = pQueue.shift()
    const nodeQ = qQueue.shift()
    if (
      (nodeP !== null && nodeQ !== null && nodeP.val !== nodeQ.val) ||
      nodeP === null ||
      nodeQ === null
    ) {
      return false
    }
    if (nodeP.left || nodeQ.left) {
      pQueue.push(nodeP.left)
      qQueue.push(nodeQ.left)
    }
    if (nodeP.right || nodeQ.right) {
      pQueue.push(nodeP.right)
      qQueue.push(nodeQ.right)
    }
    if (qQueue.length !== pQueue.length) {
      return false
    }
  }

  return true
}
