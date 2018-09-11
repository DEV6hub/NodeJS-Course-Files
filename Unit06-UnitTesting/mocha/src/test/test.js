import {describe, it} from 'mocha';
import chai from 'chai';
import app from './app';

const assert = chai.assert;

describe('Unit tests', function() {

	describe('Check if number exists in Array with indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal([1,2,3].indexOf(4), -1);
		});
	});

	describe('Check data type with typeof', function() {
		it('should return string', function() {
			assert.typeOf(typeof "Dev 6", 'string');
		});
	});

	describe('Check return value', function() {
		it('should return added result', function() {
			assert.equal(app.add(1, 2), 3);
		});
		it('should return multiplication result', function() {
			assert.notEqual(app.mul(10, 3), 20);
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





