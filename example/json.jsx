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

const c4 = (
	<div className={{ 'sssccc': true, fds: this.events.on, 'abc': this.func(sss, 'fds', 123) }}>
		<div>{events.on}</div>
	</div>
)