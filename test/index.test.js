const index = require('../src/index.js')
const chai = require('chai')
chai.should()

describe('test index.js', () => {
	index()
	function assertListEqual (list1, list2) {
		each(list1, (item, idx) => {
			each(list2, (v, i) => {
				if (idx === i) {
					item.should.be.deep.equal(v)
				}
			})
		})
	}

	it('test function.', () => {
		const list1 = [1, 2, 3]
		const list2 = [1, 2, 3]
		list1.length.should.equal(3)
		assertListEqual(list1, list2)
	})
})
