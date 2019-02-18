"use strict";

var myreact = _interopRequireWildcard(require("../dist/myreact"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var List = function List(_ref) {
  var data = _ref.data;
  return myreact.h("ul", null, myreact.h("li", null, data), myreact.h("li", null, data), myreact.h("li", null, data));
};

var mydata = 111;
var demo = myreact.h("div", {
  className: "testDiv"
}, "normalTest", myreact.h("h2", null, "title"), myreact.h(List, {
  data: mydata
}));
myreact.console.log(demo);
