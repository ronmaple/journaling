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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const areEqual = (tree, subTree) => {
    const queue = [[tree, subTree]]
    while (queue.length) {
      const [treeNode, subNode] = queue.pop()
      if (!treeNode && !subNode) {
        continue
      }
      if (!treeNode || !subNode || treeNode.val !== subNode.val) {
        return false
      }
      queue.push([treeNode.left, subNode.left], [treeNode.right, subNode.right])
    }
    return true
  }

  const queue = [root]
  while (queue.length) {
    const node = queue.pop()
    if (node) {
      if (areEqual(node, subRoot)) {
        return true
      }
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  return false
}
