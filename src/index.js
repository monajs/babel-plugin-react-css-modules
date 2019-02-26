/***
 * babel-plugin-react-css-modules
 * @fileoverview babel-plugin-react-css-modules
 * @author yangxi | 599321378@qq.com
 */

const { transformStringClassName, transformArrayClassName } = require('./core/transform')
const { IMPORT_CSS_MODULE_NAME } = require('./core/constant')

module.exports = function ({ types: t }) {
	let cssModules = t.identifier(IMPORT_CSS_MODULE_NAME)
	return {
		name: 'react-css-modules',
		visitor: {
			ImportDeclaration (path) {
				const { node: { specifiers, source } } = path
				if (!/\.(?:less|css|s[ac]ss)$/i.test(source.value)) {
					return
				}

				if (specifiers.length === 0) {
					const defaultSpecifiers = t.importNamespaceSpecifier(cssModules)
					const importDeclaration = t.importDeclaration([defaultSpecifiers], source)
					path.replaceWith(importDeclaration)
				} else if (specifiers.length === 1) {
					const [spec] = specifiers
					const { local } = spec
					cssModules = local
				}
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

					ArrayExpression (path) {
						if (path.parentPath.isJSXExpressionContainer() && path.parentPath.parentPath.isJSXAttribute()) {
							transformArrayClassName(path, cssModules)
						}
					}
				})
			}
		}
	}
}