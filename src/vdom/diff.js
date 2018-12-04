import { createNode } from '../dom';

function innerDiffNode(dom, vchildren) {
  const originChildren = dom.childList;

  for (let i = 0; i < originChildren.length; i++) {
    const child = originChildren[i];
    const vchild = vchildren[i];
    const diffRes = idiff(child, vchild);
    if (!child) {
      dom.appendChild(diffRes);
    }
  }
}

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
    // 把原来dom的数据挂载到新的dom上
    const frag = document.createDocumentFragment();
    while (dom.firstChild) frag.appendChild(dom.firstChild);
    out.appendChild(frag);
    // 更新parent指向新节点
    dom.parentNode.replaceChild(out, dom);
  }

  // 检查vnode的children
  const vchildren = vnode.children;
  // 如果vnode存在children，则遍历children的值
  if(vchildren && vchildren.length > 0) {
    innerDiffNode(out, vchildren);
  }
}

export default function diff(dom, vnode, parent) {
  const ret = idiff(dom, vnode);
  if (parent && ret.parentNode !== parent) {
    parent.appendChild(ret);
  }
  return ret;
}
