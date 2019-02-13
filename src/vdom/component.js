import { Component } from '../component';

function createComponent(NodeName, props) {
  let comp = null;
  // 如果是继承于component的控件
  if (NodeName.prototype && NodeName.prototype.render) {
    comp = new NodeName(props);
  } else {
    // func 控件
    comp = new Component(props);
    comp.constructor = NodeName;
    comp.render = doRender;
  }
  return comp;
}

function doRender(props) {
  return this.constructor(props);
}

export function buildComponentFromVNode(dom, vnode) {
  // 创建component，获取vnode的nodename和attri
  const { nodeName, attributes: props } = vnode;
  const comp = createComponent(nodeName, props);
}