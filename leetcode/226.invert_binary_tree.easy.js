// @easy
// 61ms, 42.16mb
var invertTree = function (root) {
  traversal(root)
  return root
}

const traversal = (node) => {
  if (node) {
    const temp = node.left
    node.left = node.right
    node.right = temp

    traversal(node.left)
    traversal(node.right)
  }
}
