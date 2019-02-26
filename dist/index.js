"use strict";

var _IMPORT_CSS_ = _interopRequireWildcard(require("./index.less"));

var _events = _interopRequireDefault(require("events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//{['aaa', 'bbb', {aaa: true}]}
var bad = true;
var aaa = React.createElement("div", {
  className: "".concat(_IMPORT_CSS_.ssss, " ").concat(_IMPORT_CSS_.fds)
}, React.createElement("div", {
  aaa: "".concat(styles.name, " ").concat(styles.age)
}, "Home - aaaaa"), React.createElement("div", null, _events.default.on));