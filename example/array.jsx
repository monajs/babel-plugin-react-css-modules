// 纯 string
const b1 = (
	<div className={['aaa']}>
		<div>{events.on}</div>
	</div>
)

// 纯 string + json
const b2 = (
	<div className={['aaa', 'bbb', { ccc: true }]}>
		<div>{events.on}</div>
	</div>
)

// 纯 string + json变形
const b3 = (
	<div className={['aaa', 'bbb', { 'sssccc': events.on }]}>
		<div>{events.on}</div>
	</div>
)

// 纯 string + json变形
const b4 = (
	<div className={['aaa', 'bbb', { 'sssccc': events.on, fff: true, 'fdsfff': false }]}>
		<div>{events.on}</div>
	</div>
)

// 纯 string + json + 变量
const b5 = (
	<div className={[this.fds.fds, { ccc: true }, 'sss']}>
		<div>{events.on}</div>
	</div>
)

// 纯 string + json + 变量 + 函数
const b6 = (
	<div className={[this.func(a, b, 'dsds'), { ccc: true }, 'sss']}>
		<div>{events.on}</div>
	</div>
)