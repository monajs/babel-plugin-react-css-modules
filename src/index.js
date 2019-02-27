/***
 * babel-plugin-react-css-modules
 * @fileoverview babel-plugin-react-css-modules
 * @author yangxi | 599321378@qq.com
 */

const { transformStringClassName, transformArrayClassName, transformObjectClassName } = require('./core/transform')
const { IMPORT_CSS_MODULE_NAME } = require('./core/constant')

module.exports = function ({ types: t }) {
	let cssModules = null
	return {
		name: 'react-css-modules',
		visitor: {
			ImportDeclaration (path) {
				if (cssModules) {
					return
				}
				const { node: { specifiers, source } } = path
				if (!/\.(?:less|css|s[ac]ss)$/i.test(source.value)) {
					return
				}

				let defaultSpecifiers = null
				let importDeclaration = null

				if (specifiers.length === 0) {
					cssModules = t.identifier(IMPORT_CSS_MODULE_NAME)
					defaultSpecifiers = t.importNamespaceSpecifier(cssModules)
					importDeclaration = t.importDeclaration([defaultSpecifiers], source)
				} else if (specifiers.length === 1) {
					const [specifier] = specifiers
					const { local } = specifier
					cssModules = t.identifier(local.name)
					defaultSpecifiers = t.importNamespaceSpecifier(cssModules)
					importDeclaration = t.importDeclaration([defaultSpecifiers], source)
				}
				path.replaceWith(importDeclaration)
			},

			JSXAttribute (path) {
				const { node } = path
				const { name } = node.name
				if (!/^className$/.test(name)) {
					return
				}

				path.traverse({
					// 处理 className 为 string 的场景
					StringLiteral (path) {
						if (path.parentPath.isJSXAttribute() ||
							(path.parentPath.isJSXExpressionContainer() && path.parentPath.parentPath.isJSXAttribute())) {
							transformStringClassName(path, cssModules)
						}
					},

					// 处理 className 为 array 的场景
					ArrayExpression (path) {
						if (path.parentPath.isJSXExpressionContainer() && path.parentPath.parentPath.isJSXAttribute()) {
							transformArrayClassName(path, cssModules)
						}
					},

					// 处理 className 为 json 的场景
					ObjectExpression (path) {
						if (path.parentPath.isJSXExpressionContainer() && path.parentPath.parentPath.isJSXAttribute()) {
							transformObjectClassName(path, cssModules)
						}
					}
				})
			}
		}
	}
}