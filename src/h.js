import VNode from './vnode';

function h(nodeName, attributes, ...rest) {
  const vnode = new VNode();
  vnode.nodeName = nodeName;
  vnode.attributes = attributes;
  vnode.children = rest;
  return vnode;
}

export default h;
