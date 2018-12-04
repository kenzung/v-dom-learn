export function createNode(nodeName) {
  const node = document.createElement(nodeName);
  node.normalizedNodeName = nodeName;
  return node;
}

export function removeNode(node) {
  const parent = node.parentNode;
  if (parent) {
    parent.removeChild(node);
  }
}