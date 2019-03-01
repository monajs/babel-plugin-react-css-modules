/**
 * @fileoverview babel-plugin-react-css-modules
 * @author yangxi | 599321378@qq.com
 */

// 获取 class 列表
const getClassList = function (classes) {
	return classes.split(' ').filter(v => v)
}

module.exports = {
	getClassList
}