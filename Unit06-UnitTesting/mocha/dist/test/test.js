'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mocha = require('mocha');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = _chai2.default.assert;

(0, _mocha.describe)('Unit tests', function () {

	(0, _mocha.describe)('Check if number exists in Array with indexOf()', function () {
		(0, _mocha.it)('should return -1 when the value is not present', function () {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});

	(0, _mocha.describe)('Check data type with typeof', function () {
		(0, _mocha.it)('should return string', function () {
			assert.equal(_typeof("Dev 6"), 'string');
		});
	});

	(0, _mocha.describe)('Check return value', function () {
		(0, _mocha.it)('should return added result', function () {
			assert.equal(_app2.default.add(1, 2), 3);
		});
		(0, _mocha.it)('should return multiplication result', function () {
			assert.notEqual(_app2.default.mul(10, 3), 20);
		});
	});

	(0, _mocha.describe)('Testing asynchronous code', function () {
		(0, _mocha.it)('tests setTimeout method', function (done) {
			// overriding default timeout limit // Default is 2000ms
			this.timeout(5000);
			_app2.default.asyncTest(done);
		});
	});
});