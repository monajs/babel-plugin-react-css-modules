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
		// 单一变量类型
		classModulesExpression = t.memberExpression(cssModules, t.stringLiteral(path.name), true)
		const expression2 = t.logicalExpression('||', path, t.identifier('""'))
		return t.logicalExpression('||', classModulesExpression, expression2)
	} else if (t.isStringLiteral(path)) {
		// 字符串类型
		classModulesExpression = t.memberExpression(cssModules, path, true)
		return t.logicalExpression('||', classModulesExpression, path)
	}
	// 其他类型
	classModulesExpression = t.memberExpression(cssModules, path, true)
	const expression2 = t.logicalExpression('||', path, t.identifier('""'))
	return t.logicalExpression('||', classModulesExpression, expression2)
}

module.exports = {
	getClassList,
	optionCssModules
}