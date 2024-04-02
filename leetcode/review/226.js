var invertTree = function(root) {
    const stack = [root]
    while (stack.length) {
      const node = stack.pop()
      if (node) {
        const temp = node.left
        node.left = node.right
        node.right = temp
        stack.push(node.left)
        stack.push(node.right)
      }
    }

    return root
};
