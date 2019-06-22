/**
 * 核心转换逻辑
 * @author yangxi | 599321378@qq.com
 */

const t = require('@babel/types')
const { getClassList } = require('./util')

/**
 * 处理单个 className
 * @param cssModules
 * @param path
 * @returns {*}
 */
const optionCssModules = function (cssModules, path) {
	let resultModulesExpression = t.booleanLiteral(false)
	cssModules.forEach((cssModule) => {
		let classModulesExpression = t.memberExpression(cssModule, path, true)
		resultModulesExpression = t.logicalExpression('||', resultModulesExpression, classModulesExpression)
	})

	let expression2 = t.isStringLiteral(path) ? path : t.logicalExpression('||', path, t.identifier('""'))
	return t.logicalExpression('||', resultModulesExpression, expression2)
}

/**
 * concat 操作
 * @param path
 * @param arguments
 */
const concatHandler = function (path, arguments) {
	let callExpression = t.identifier('""')
	let concatMemberExpression = t.memberExpression(callExpression, t.identifier('concat'))
	let expression = t.callExpression(concatMemberExpression, arguments)
	path.replaceWith(path.parentPath.isJSXExpressionContainer() ? expression : t.jsxExpressionContainer(expression))
}

/**
 * 处理 JSON 类型的转换
 * @param properties json item
 * @param cssModules
 * @param end
 * @returns {Array}
 */
const jsonHandler = function (properties, cssModules, end = true) {
	let arguments = []
	properties.forEach((item, index) => {
		let { key, value } = item
		if (t.isIdentifier(key)) {
			key = t.stringLiteral(key.name)
		}
		const classExpression = optionCssModules(cssModules, key)
		const conditionalExpression = t.conditionalExpression(value, classExpression, t.identifier('""'))
		arguments.push(
			conditionalExpression,
			t.identifier(end && index === properties.length - 1 ? '""' : '" "')
		)
	})
	return arguments
}
/**
 * 处理 String 类型的转换
 * @param string
 * @param cssModules
 * @param end
 * @returns {Array}
 */
const stringHandler = function (string, cssModules, end = true) {
	const classList = getClassList(string)
	let arguments = []
	classList.forEach((v, i) => {
		arguments.push(
			optionCssModules(cssModules, t.stringLiteral(v)),
			t.identifier(end && i === classList.length - 1 ? '""' : '" "')
		)
	})
	return arguments
}

/**
 * 转换 string 类型的 className
 * @param path
 * @param cssModules
 */
const transformStringClassName = function (path, cssModules) {
	const string = path.node.value
	const arguments = stringHandler(string, cssModules)
	concatHandler(path, arguments)
}

/**
 * 转换 array 类型的 className
 * @param path
 * @param cssModules
 */
const transformArrayClassName = function (path, cssModules) {
	let arguments = []
	const classList = path.node.elements
	classList.forEach((v, i) => {
		const end = i === classList.length - 1
		if (t.isObjectExpression(v)) {
			const { properties } = v
			arguments = arguments.concat(jsonHandler(properties, cssModules, end))
		} else if (t.isStringLiteral(v)) {
			const string = v.value
			arguments = arguments.concat(stringHandler(string, cssModules, end))
		} else {
			// 非 json 类型
			arguments.push(
				optionCssModules(cssModules, v),
				t.identifier(i === classList.length - 1 ? '""' : '" "')
			)
		}
	})
	concatHandler(path, arguments)
}

/**
 * 转换 JSON 格式的 className
 * @param path
 * @param cssModules
 */
const transformObjectClassName = function (path, cssModules) {
	const { properties } = path.node
	const arguments = jsonHandler(properties, cssModules)
	concatHandler(path, arguments)
}

module.exports = {
	transformStringClassName,
	transformArrayClassName,
	transformObjectClassName
}