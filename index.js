module.exports = function ({ types: babelTypes }) {
	return {
		name: 'react-css-modules',
		visitor: {
			Identifier (path, state) {
				if (path.node.name === 'bad') {
					path.node.name = 'good'
				}
			}
		}
	}
}