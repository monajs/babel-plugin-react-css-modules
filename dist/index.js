"use strict";

var _MONAJS_IMPORT_CSS_ = _interopRequireWildcard(require("./index.less"));

var _events = _interopRequireDefault(require("events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var a1 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_.ssss, "")
}, React.createElement("div", null, _events.default.on));
var a2 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_.ssss, " ").concat(_MONAJS_IMPORT_CSS_.fds, " ").concat(_MONAJS_IMPORT_CSS_.ss, "")
}, React.createElement("div", null, _events.default.on));
var a3 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_.ssss, " ").concat(_MONAJS_IMPORT_CSS_.fds, "")
}, React.createElement("div", null, _events.default.on));
var b1 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_.aaa, "")
}, React.createElement("div", null, _events.default.on)); // const b2 = (
// 	<div className={['aaa', 'bbb', { ccc: true }]}>
// 		<div>{events.on}</div>
// 	</div>
// )
//
// const b3 = (
// 	<div className={['aaa', 'bbb', { 'sssccc': events.on }]}>
// 		<div>{events.on}</div>
// 	</div>
// )

var b4 = React.createElement("div", {
  className: "".concat(_MONAJS_IMPORT_CSS_.aaa, " ").concat(_MONAJS_IMPORT_CSS_.bbb, " ").concat(_events.default.on ? _MONAJS_IMPORT_CSS_.sssccc : "", " ").concat(true ? _MONAJS_IMPORT_CSS_.fff : "", " ").concat(false ? _MONAJS_IMPORT_CSS_.fdsfff : "", "")
}, React.createElement("div", null, _events.default.on)); //
// const c1 = (
// 	<div className={{ 'sssccc': true }}>
// 		<div>{events.on}</div>
// 	</div>
// )