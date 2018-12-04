import { diff } from './vdom/diff';

export default function render(vnode, parent) {
  diff(null, vnode, parent);
}
