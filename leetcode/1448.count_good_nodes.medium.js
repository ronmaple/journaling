/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let good = 0

  const dfs = (node, currentMax) => {
    if (node) {
      if (node.val >= currentMax) {
        good++
        currentMax = node.val
      }
      dfs(node.left, currentMax)
      dfs(node.right, currentMax)
    }
  }

  dfs(root, root.val)
  return good
}
