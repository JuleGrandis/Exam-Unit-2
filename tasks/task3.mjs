function processNodes(node) {
    function traverse (node, depth) {
        if (node === null) {
            return { sum: 0, maxDepth: depth - 1, nodeCount: 0};
        }

        const leftResult = traverse(node.left, depth + 1);
        const rightResult = traverse(node.right, depth + 1);

        const sum = node.value + leftResult.sum + rightResult.sum;
        const nodeCount = 1 + leftResult.nodeCount + rightResult.nodeCount;

        const maxDepth = (leftResult.maxDepth > rightResult.maxDepth)
            ? leftResult.maxDepth
            : rightResult.maxDepth;
        const currentMaxDepth = (depth > maxDepth) ? depth : maxDepth;

        return { sum, maxDepth: currentMaxDepth, nodeCount};
    }

    const result = traverse(node, 1);

    return `${result.sum}, ${result.maxDepth}, ${result.nodeCount}`;

}

export default processNodes;