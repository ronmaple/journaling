// @easy
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

// 1. from deepest node, calculate the depth of left and depth of right
// 2. calculate diameter as depth of right + depth of left
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0

  const dfs = (root) => {
    if (!root) {
      return 0
    }
    let leftMaxDepth = dfs(root.left)
    let rightMaxDepth = dfs(root.right)

    // max diameter from the current node all the way to the root node
    maxDiameter = Math.max(maxDiameter, leftMaxDepth + rightMaxDepth)
    // 1+ to account the depth of the current node to its parent
    return 1 + Math.max(leftMaxDepth, rightMaxDepth)
  }

  dfs(root)
  return maxDiameter
}
