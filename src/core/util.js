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
		classModulesExpression = t.memberExpression(cssModules, t.stringLiteral(path.name), true)
		return t.logicalExpression('||', classModulesExpression, t.stringLiteral(path.name))
	}
	classModulesExpression = t.memberExpression(cssModules, path, true)
	const expression2 = t.logicalExpression('||', path, t.identifier('""'))
	return t.logicalExpression('||', classModulesExpression, expression2)
}

const hasBindCssModules = function (cssModules, path) {
	return path.scope.hasBindings
}

module.exports = {
	getClassList,
	optionCssModules
}