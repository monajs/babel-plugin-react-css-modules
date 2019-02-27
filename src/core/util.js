/**
 * @fileoverview babel-plugin-react-css-modules
 * @author yangxi | 599321378@qq.com
 */

const t = require('@babel/types')

const getClassList = function (classes) {
	return classes.split(' ').filter(v => v)
}

const optionCssModules = function (cssModules, identifier) {
	const classModulesExpression = t.memberExpression(cssModules, identifier)
	return t.logicalExpression('||', classModulesExpression, t.identifier('""'))
}

module.exports = {
	getClassList,
	optionCssModules
}