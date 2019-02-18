import { Component } from '../component';
import { diff } from './diff';

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

function setComponentProps(component, props) {
  if (!component.base) {
    if (component.componentWillMount) {
      component.componentWillMount();
    }
  }

  if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps();
  }

  component.prevProps = component.props;
  component.props = props;

  renderComponent(component);
}

// 渲染子控件
function renderComponent(component) {
  const { base, state, props } = component;

  const initBase = base;
  let skip = false;
  if (initBase) {
    if (component.shouldComponentUpdate) {
      skip = component.shouldComponentUpdate();
    }
    if (!skip) {
      if (component.componentWillUpdate) {
        component.componentWillUpdate();
      }
    }
  }

  if (!skip) {
    // 执行component的render方法
    const renderer = component.render(props, state);
    
    // 获取控件的diff结果
    const ret = diff(base, renderer, base && base.parentNode);

    // 设置component的base
    component.base = ret;

    if (initBase && ret !== initBase) {
      const baseParent = initBase.parentNode;
      if (baseParent) {
        // 替换旧节点
        baseParent.replaceChild(ret, initBase);
        
        // 释放旧节点
      }
    }
  }
}

export function buildComponentFromVNode(dom, vnode) {
  // 创建component，获取vnode的nodename和attri
  const { nodeName, attributes: props } = vnode;
  const component = createComponent(nodeName, props);
  // 设置 props
  setComponentProps(component, props);
  return component.base;
}