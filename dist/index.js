"use strict";

var _MONAJS_IMPORT_CSS_ = _interopRequireWildcard(require("./index.less"));

var _events = _interopRequireDefault(require("events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// const a1 = (
// 	<div className='ssss'>
// 		<div>{events.on}</div>
// 	</div>
// )
//
// const a2 = (
// 	<div className='ssss fds ss'>
// 		<div>{events.on}</div>
// 	</div>
// )
//
// const a3 = (
// 	<div className='ssss   fds  '>
// 		<div>{events.on}</div>
// 	</div>
// )
//
// const b1 = (
// 	<div className={['aaa']}>
// 		<div>{events.on}</div>
// 	</div>
// )
//
// const b2 = (
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
//
// const b4 = (
// 	<div className={['aaa', 'bbb', { 'sssccc': events.on, fff: true, 'fdsfff': false }]}>
// 		<div>{events.on}</div>
// 	</div>
// )
var c1 = React.createElement("div", {
  className: "".concat(true ? _MONAJS_IMPORT_CSS_.sssccc : "", "")
}, React.createElement("div", null, _events.default.on));
var c2 = React.createElement("div", {
  className: "".concat(true ? _MONAJS_IMPORT_CSS_.sssccc : "", " ").concat(_events.default ? _MONAJS_IMPORT_CSS_.fds : "", "")
}, React.createElement("div", null, _events.default.on));
var c3 = React.createElement("div", {
  className: ""
}, React.createElement("div", null, _events.default.on));