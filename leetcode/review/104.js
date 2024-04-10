var maxDepth = function (root) {
    let max = 0
    const dfs = (node, depth) => {
        if (node) {
            max = Math.max(max, depth)
            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1)
        }
    }

    dfs(root, 1)

    return max
};
