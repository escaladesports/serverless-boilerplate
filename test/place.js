import mochaPlugin from 'serverless-mocha-plugin'
const expect = mochaPlugin.chai.expect
const wrapped = mochaPlugin.getWrapper('hello', '/handler.js', 'hello')

describe('Result', () => {
	it('should be success', async () => {
		const res = await wrapped.run({
			body: {
				test: 'abc'
			}
		})
		expect(res.body).to.not.be.empty
		res.body = JSON.parse(res.body)
		expect(res.body.result).to.not.be.empty
		expect(res.body.result).to.equal('success')
	})
})
