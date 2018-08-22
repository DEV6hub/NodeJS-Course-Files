describe('Unit tests', function() {

	describe('Check if number exists in Array with indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			expect([1,2,3].indexOf(4)).to.equal(-1);
		});
	});

	describe('Check data type with typeof', function() {
		it('should return string', function() {
			expect(typeof "Dev 6").to.equal('string');
		});
	});

	describe('Check return value', function() {
		it('should return added result', function() {
			expect((app.add(1, 2))).to.equal(3);
		});
		it('should return multiplication result', function() {
			expect(app.mul(10, 3)).to.not.equal(20);
		});
	});

	describe('Testing asynchronous code', function() {
		it('tests setTimeout method', function(done) {
			// overriding default timeout limit // Default is 2000ms
			this.timeout(5000);
			app.asyncTest(done);
		});
	});

});





