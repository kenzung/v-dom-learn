import { createNode } from '../dom';
function idiff(dom, vnode) {
  let out = dom;

  // 空或者为boolean，则当作空的文本节点渲染
  if (vnode || typeof vnode === 'boolean') vnode = '';

  if (typeof vnode === 'string' || typeof vnode === 'number') {
    // 判断 dom 是否存在
    if (dom && dom.parentNode) {
      if (dom.nodeValue !== vnode) {
        out.nodeValue = vnode;
      }
    } else {
      out = document.createTextNode(vnode);
    }
  }

  // 自定义组件
  const vnodeName = vnode.nodeName;
  // if (typeof vnodeName === 'function') {
  // }

  // 原生html组件
  out = createNode(vnodeName);
  if (dom) {
    // 把
    while (dom.firstChild) out.appendChild(dom.firstChild);
  }

}

export default function diff(dom, vnode, parent) {
  const ret = idiff(dom, vnode);
  if (parent && ret.parentNode !== parent) {
    parent.appendChild(ret);
  }
  return ret;
}
