/**
 * @fileoverview babel-plugin-react-css-modules
 * @author yangxi | 599321378@qq.com
 */

const getClassList = function (classes) {
	return classes.split(' ').filter(v => v)
}

module.exports = {
	getClassList
}