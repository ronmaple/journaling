// @medium
var rightSideView = function (root) {
  const output = []
  const queue = [root]

  while (queue.length) {
    const currentLevelSize = queue.length

    for (let i = 0; i < currentLevelSize; i++) {
      const node = queue.shift()
      if (node) {
        if (i === currentLevelSize - 1) {
          // right most value
          output.push(node.val)
        }
        if (node.left) {
          queue.push(node.left)
        }
        if (node.right) {
          queue.push(node.right)
        }
      }
    }
  }

  return output
}
