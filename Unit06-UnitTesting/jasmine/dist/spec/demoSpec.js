'use strict';

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('app.add', function () {
	it('should add two positive numbers', function () {
		var x = _app2.default.add(1, 2);
		expect(x).toEqual(3);
	});

	it('should add a postive and a negative number', function () {
		var x = _app2.default.add(1, -1);
		expect(x).toEqual(0);
	});

	it('should add two negative numbers', function () {
		var x = _app2.default.add(-1, -1);
		expect(x).toEqual(-2);
	});
});

describe('app.mult', function () {
	it('should multiply two positive numbers', function () {
		var x = _app2.default.mult(1, 2);
		expect(x).toEqual(2);
	});

	it('should multiply a positive and a negative number', function () {
		var x = _app2.default.mult(1, -2);
		expect(x).toEqual(-2);
	});

	it('should multiply two negative numbers', function () {
		var x = _app2.default.mult(-2, -2);
		expect(x).toEqual(4);
	});
});

describe('disabled suite', function () {
	it('disabled test case', function () {
		var x = 1 + 1;
		expect(x).toEqual(2);
	});
});

describe('async tests', function () {
	var x = 0;
	var flag = false;
	runs(function () {
		_app2.default.asyncThing(function (value) {
			flag = true;
			if (value) {
				x = x + 1;
			} else {
				x = x - 1;
			}
		});
	});
	waitsFor(function () {
		return flag;
	});
	runs(function () {
		expect(x).toEqual(1);
		expect(x).not.toEqual(-1);
	});
});