const { getClassList } = require('./core/util')
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
						let concatMemberExpression = null
						let callExpression = t.identifier('""')

						const classList = getClassList(path.node.value)
						classList.forEach((v, i) => {
							concatMemberExpression = t.memberExpression(callExpression, t.identifier('concat'))
							if (i === classList.length - 1) {
								callExpression = t.callExpression(concatMemberExpression, [
									t.memberExpression(cssModules, t.identifier(v))
								])
							} else {
								callExpression = t.callExpression(concatMemberExpression, [
									t.memberExpression(cssModules, t.identifier(v)),
									t.identifier('" "')
								])
							}
						})
						const expresion = t.JSXExpressionContainer(callExpression)
						path.replaceWith(expresion)
					}
					// ObjectExpression (path) {
					// 	console.log('object')
					// 	console.log(path)
					// },
					// TemplateLiteral (path) {
					// 	console.log('template')
					// 	console.log(path.node.expressions)
					// }
				})
			}
		}
	}
}