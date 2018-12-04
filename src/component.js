export function Component (props){
  this.props = props;

  this.state = this.state || {};
}

Component.prototype.setState = function (state) {
  let newState = state;
  if (typeof state === 'function') {
    newState = state(this.state, this.props);
  }
  this.state = {
    ...this.state,
    ...newState,
  };
  // 更新完state之后应该去执行render方法
  // TODO 进入render
};

Component.prototype.render = function () {};