"use strict";

var _MONAJS_IMPORT_CSS_ = _interopRequireWildcard(require("./index.less"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// 纯 string
var b1 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_["aaa"] || "aaa", "")
}, React.createElement("div", null, events.on)); // 纯 string + json

var b2 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_["aaa"] || "aaa", " ").concat(_MONAJS_IMPORT_CSS_["bbb"] || "bbb", " ").concat(true ? _MONAJS_IMPORT_CSS_["ccc"] || "ccc" : "", "")
}, React.createElement("div", null, events.on)); // 纯 string + json变形

var b3 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_["aaa"] || "aaa", " ").concat(_MONAJS_IMPORT_CSS_["bbb"] || "bbb", " ").concat(events.on ? _MONAJS_IMPORT_CSS_["sssccc"] || "sssccc" : "", "")
}, React.createElement("div", null, events.on)); // 纯 string + json变形

var b4 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_["aaa"] || "aaa", " ").concat(_MONAJS_IMPORT_CSS_["bbb"] || "bbb", " ").concat(events.on ? _MONAJS_IMPORT_CSS_["sssccc"] || "sssccc" : "", " ").concat(true ? _MONAJS_IMPORT_CSS_["fff"] || "fff" : "", " ").concat(false ? _MONAJS_IMPORT_CSS_["fdsfff"] || "fdsfff" : "", "")
}, React.createElement("div", null, events.on)); // 纯 string + json + 变量

var b5 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_[(void 0).fds.fds] || "", " ").concat(true ? _MONAJS_IMPORT_CSS_["ccc"] || "ccc" : "", " ").concat(_MONAJS_IMPORT_CSS_["sss"] || "sss", "")
}, React.createElement("div", null, events.on)); // 纯 string + json + 变量 + 函数

var b6 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_[(void 0).func(a, b, 'dsds')] || "", " ").concat(true ? _MONAJS_IMPORT_CSS_["ccc"] || "ccc" : "", " ").concat(_MONAJS_IMPORT_CSS_["sss"] || "sss", "")
}, React.createElement("div", null, events.on)); // 纯 string + json + 变量 + 函数

var b7 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_[(void 0).func(a, b, 'dsds-fds')] || "", " ").concat(true ? _MONAJS_IMPORT_CSS_["fd-ssss-fdfdfd"] || "fd-ssss-fdfdfd" : "", " ").concat(_MONAJS_IMPORT_CSS_["sss-dd-dd"] || "sss-dd-dd", "")
}, React.createElement("div", null, events.on));