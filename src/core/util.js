const getClassList = function (classes) {
	return classes.split(' ').filter(v => v)
}

module.exports = {
	getClassList
}