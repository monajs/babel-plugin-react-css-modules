/**
 * @fileoverview babel-plugin-react-css-modules
 * @author yangxi | 599321378@qq.com
 */

const t = require('@babel/types')

// 获取 class 列表
const getClassList = function (classes) {
	return classes.split(' ').filter(v => v)
}

// hold 住所有类型的 cssModules 转换
const optionCssModules = function (cssModules, path) {
	let classModulesExpression = null
	if (t.isIdentifier(path)) {
		classModulesExpression = t.memberExpression(cssModules, path)
		return t.logicalExpression('||', classModulesExpression, t.stringLiteral(path.name))
	}
	classModulesExpression = t.memberExpression(cssModules, path, true)
	return t.logicalExpression('||', classModulesExpression, t.identifier('""'))
}

module.exports = {
	getClassList,
	optionCssModules
}