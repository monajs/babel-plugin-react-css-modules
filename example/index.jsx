import './index.less'
import events from 'events'

const a1 = (
	<div className='ssss'>
		<div>{events.on}</div>
	</div>
)

const a2 = (
	<div className='ssss fds ss'>
		<div>{events.on}</div>
	</div>
)

const a3 = (
	<div className='ssss   fds  '>
		<div>{events.on}</div>
	</div>
)

const b1 = (
	<div className={['aaa']}>
		<div>{events.on}</div>
	</div>
)

const b2 = (
	<div className={['aaa', 'bbb', { ccc: true }]}>
		<div>{events.on}</div>
	</div>
)

const b3 = (
	<div className={['aaa', 'bbb', { 'sssccc': events.on }]}>
		<div>{events.on}</div>
	</div>
)

const b4 = (
	<div className={['aaa', 'bbb', { 'sssccc': events.on, fff: true, 'fdsfff': false }]}>
		<div>{events.on}</div>
	</div>
)

const c1 = (
	<div className={{ 'sssccc': true }}>
		<div>{events.on}</div>
	</div>
)

const c2 = (
	<div className={{ 'sssccc': true, fds: events }}>
		<div>{events.on}</div>
	</div>
)

const c3 = (
	<div className={{}}>
		<div>{events.on}</div>
	</div>
)