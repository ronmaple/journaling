// @medium
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// copy nodes into hash map
// the keys will be the ref to the original node
// so that in the 2nd iteration, the keys
// can be used to get the random pointer refs
// and the next refs
var copyRandomList = function (head) {
  if (!head) {
    return null
  }
  const copy = new Map()
  let node = head

  while (node) {
    copy.set(node, new Node(node.val))
    node = node.next
  }

  node = head
  while (node) {
    copy.get(node).next = copy.get(node.next) || null
    copy.get(node).random = copy.get(node.random) || null
    node = node.next
  }

  return copy.get(head)
}

// TODO:
// do this without using hash map
