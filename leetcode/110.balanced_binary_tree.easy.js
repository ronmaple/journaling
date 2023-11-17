// @easy
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) {
      return [true, 0]
    }

    const left = dfs(node.left)
    const right = dfs(node.right)
    // Check if current node is balanced
    // and if previous nodes were unbalanced
    const balanced = Math.abs(left[1] - right[1]) <= 1 && left[0] && right[0]
    return [balanced, Math.max(left[1], right[1]) + 1]
  }

  return dfs(root)[0]
}
