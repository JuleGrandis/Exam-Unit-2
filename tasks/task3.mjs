function processNodes(node) {
    let sum = 0;
    let maxDepth = 0;
    let nodeCount = 0;

    function traverse (node, depth) {
        if (node === null) return;

        sum += node.value;
        nodeCount++;
        
        if (depth > maxDepth) {
            maxDepth = depth;
        }

        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }

    traverse(node, 1);

    return { sum, maxDepth, nodeCount};
}