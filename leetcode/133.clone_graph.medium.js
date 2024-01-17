/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const hashMap = new Map()
  const clone = (ref) => {
    if (hashMap.has(ref.val)) {
      return hashMap.get(ref.val)
    }

    hashMap.set(ref.val, new Node(ref.val))
    hashMap.get(ref.val).neighbors = ref.neighbors.map((n) => clone(n))

    return hashMap.get(ref.val)
  }

  return node === null ? null : clone(node)
}
