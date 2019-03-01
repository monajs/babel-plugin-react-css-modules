# Mona - babel-plugin-react-css-modules

✨✨ 一款非常实用的 react-css-modules 插件

[![npm](https://img.shields.io/npm/v/@monajs/babel-plugin-react-css-modules.svg?style=flat-square)](https://www.npmjs.com/package/@monajs/babel-plugin-react-css-modules) [![npm](https://img.shields.io/npm/dt/@monajs/babel-plugin-react-css-modules.svg?style=flat-square)](https://www.npmjs.com/package/@monajs/babel-plugin-react-css-modules)

## 背景

[babel插件之react-css-modules](https://github.com/func-star/blog/issues/29)

## 安装

```bash
$ npm i --save-dev @monajs/babel-plugin-react-css-modules
```

## 使用

### 字符串形式
```js
const a2 = (
	<div className='ssss fds ss'>
		<div>{events.on}</div>
	</div>
)
```

### 数组形式
```js
const b1 = (
	<div className={['aaa', 'bbb']}>
		<div>{events.on}</div>
	</div>
)

const b2 = (
	<div className={['aaa', bbb, { 'bbb': this.isShow, ccc: true, 'ddd': false }]}>
		<div>{events.on}</div>
	</div>
)

const b3 = (
	<div className={[this.classname(), { 'fd-ssss-fdfdfd': true }, 'sss-dd-dd']}>
		<div>{events.on}</div>
	</div>
)
```

### json形式
```js
const c1 = (
	<div className={{ 'aaa': true }}>
		<div>{events.on}</div>
	</div>
)

const c2 = (
	<div className={{ 'aaa': true, bbb: events }}>
		<div>{events.on}</div>
	</div>
)

const c3 = (
	<div className={{ 'aaa': true, bbb: this.ctrl.isShow, 'ccc': this.showClassname() }}>
		<div>{events.on}</div>
	</div>
)
```

## 使用注意点
* 插件会读取样式文件的引入，若未识别到命名为`index`的样式文件，则跳过该文件的转换（路径正则匹配`/\/index\.(?:less|css|s[ac]ss)$/i`）
* 插件不会对模版字符串进行转换，请选择适合的场景使用模版字符串


## 联系我
> 微信：599321378

