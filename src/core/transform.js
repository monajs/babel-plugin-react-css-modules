/**
 * @fileoverview babel-plugin-react-css-modules
 * @author yangxi | 599321378@qq.com
 */

const t = require('@babel/types')
const { getClassList, optionCssModules } = require('./util')

// 转换 string 格式的 className
const transformStringClassName = function (path, cssModules) {
	let concatMemberExpression = null
	let callExpression = t.identifier('""')

	const classList = getClassList(path.node.value)
	classList.forEach((v, i) => {
		concatMemberExpression = t.memberExpression(callExpression, t.identifier('concat'))
		callExpression = t.callExpression(concatMemberExpression, [
			optionCssModules(cssModules, t.stringLiteral(v)),
			t.identifier(i === classList.length - 1 ? '""' : '" "')
		])
	})
	const expresion = t.JSXExpressionContainer(callExpression)
	path.replaceWith(expresion)
}

// 转换 array 格式的 className
const transformArrayClassName = function (path, cssModules) {
	let concatMemberExpression = null
	let callExpression = t.identifier('""')

	const classList = path.node.elements
	classList.forEach((v, i) => {
		if (t.isStringLiteral(v)) {
			concatMemberExpression = t.memberExpression(callExpression, t.identifier('concat'))
			callExpression = t.callExpression(concatMemberExpression, [
				optionCssModules(cssModules, v),
				t.identifier(i === classList.length - 1 ? '""' : '" "')
			])
		} else if (t.isObjectExpression(v)) {
			const { properties } = v
			properties.forEach((item, index) => {
				concatMemberExpression = t.memberExpression(callExpression, t.identifier('concat'))
				let { key, value } = item
				if (t.isIdentifier(key)) {
					key = t.stringLiteral(key.name)
				}
				const classExpression = optionCssModules(cssModules, key)
				const conditionalExpression = t.conditionalExpression(value, classExpression, t.identifier('""'))
				callExpression = t.callExpression(concatMemberExpression, [
					conditionalExpression,
					t.identifier(i === classList.length - 1 && index === properties.length - 1 ? '""' : '" "')
				])
			})
		} else {
			// 非字符串和链式表达式
			concatMemberExpression = t.memberExpression(callExpression, t.identifier('concat'))
			callExpression = t.callExpression(concatMemberExpression, [
				optionCssModules(cssModules, v),
				t.identifier(i === classList.length - 1 ? '""' : '" "')
			])
		}
	})
	path.replaceWith(callExpression)
}

// 转换 json 格式的 className
const transformObjectClassName = function (path, cssModules) {
	let concatMemberExpression = null
	let callExpression = t.identifier('""')
	const { properties } = path.node
	properties.forEach((item, index) => {
		concatMemberExpression = t.memberExpression(callExpression, t.identifier('concat'))
		let { key, value } = item
		if (t.isIdentifier(key)) {
			key = t.stringLiteral(key.name)
		}
		const classExpression = optionCssModules(cssModules, key)
		const conditionalExpression = t.conditionalExpression(value, classExpression, t.identifier('""'))
		callExpression = t.callExpression(concatMemberExpression, [
			conditionalExpression,
			t.identifier(index === properties.length - 1 ? '""' : '" "')
		])
	})
	path.replaceWith(callExpression)
}

module.exports = {
	transformStringClassName,
	transformArrayClassName,
	transformObjectClassName
}