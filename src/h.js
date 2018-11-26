import VNode from './vnode';

function h(nodeName, attributes, ...rest) {
  // const children = [];
  // for (let i = 0; i < rest.length; i++) {
  //   const child = rest[i];
  //   if (typeof child === 'boolean') {
  //     continue;
  //   }
  //   if (typeof child === 'function') {
  //     const childRes = h();
  //   }
  // }
  const vnode = new VNode();
  vnode.nodeName = nodeName;
  vnode.attributes = attributes;
  vnode.children = rest;
  return vnode;
}

export default h;
