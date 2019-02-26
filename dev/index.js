const babel = require('@babel/core')
const types = require('@babel/types')
const fs = require('fs')

const path = './example/index.jsx'
const outPath = './dist/index.js'

fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
	if (err) throw err
	const code = data.toString()
	const result = babel.transform(code, {
		presets: [
			require('@babel/preset-react'),
			require('@babel/preset-env')
		],
		plugins: [
			require('../src/index')
		]
	})
	fs.writeFile(outPath, result.code, 'utf8', (err) => {
		if (err) throw err
		console.log('转换结束')
	})
})
