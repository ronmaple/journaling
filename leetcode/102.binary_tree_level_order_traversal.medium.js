// @medium
var levelOrder = function (root) {
  const output = []

  const bfs = (node, level = 0) => {
    if (node) {
      if (!output[level]) {
        output[level] = []
      }
      output[level].push(node.val)

      if (node.left) {
        bfs(node.left, level + 1)
      }
      if (node.right) {
        bfs(node.right, level + 1)
      }
    }
  }

  bfs(root, 0)

  return output
}
