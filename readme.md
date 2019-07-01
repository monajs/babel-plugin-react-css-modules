# babel-plugin-react-css-modules

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
	<div className={['aaa', 'bbb', 'ccc ddd']}>
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
* 插件只会处理 `string` 类型、`array` 类型、`json` 类型的 `CSS Modules` 转换，不会对模版字符串、字符串叠加计算等方式进行转换


## 联系我
> 微信：yx12032331

