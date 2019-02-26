const t = require('@babel/types')

module.exports = {
	handleStringLiteral (path, options) {
		const { node } = path
		const { value } = node

		if (!value.trim()) {
			return
		}

		const expression = handlerString(value, options)

		path.replaceWith(path.parentPath.isJSXExpressionContainer() ? expression : t.jsxExpressionContainer(expression))
	}
}