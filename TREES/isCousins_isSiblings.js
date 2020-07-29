var isCousins = function(root, x, y) {
    const xPath = [];
    // find x path
    constructPath(root, x, xPath);
    
    const yPath = [];
    // find y path
    constructPath(root, y, yPath);
    
    if (xPath.length != yPath.length) {
        return false;
    }
    
    // The difference of the depth of x/y and where they diverge should be > 1 to know they have different parents
    let pathDivergeDepth = xPath.length;
    for(let i = 0; i < xPath.length; i++) {
        if (xPath[i] != yPath[i]) {
            pathDivergeDepth = i;
            break;
        }
    }
    
    return xPath.length - pathDivergeDepth > 1;
};

const constructPath = function(node, val, path) {
    if (node == null) {
        return false;
    }
    
    path.push(1); // 1 for left
    if (!constructPath(node.left, val, path)) {
        path.pop();
    } else {
        return true;
    }
    
    if(node.val == val) {
        return true;
    }
    
    path.push(0); // 0 for right
    if (!constructPath(node.right, val, path)) {
        path.pop();
    } else {
        return true;
    }
}
