export function createNode(nodeName) {
  const node = document.createElement(nodeName);
  node.normalizedNodeName = nodeName;
  return node;
}