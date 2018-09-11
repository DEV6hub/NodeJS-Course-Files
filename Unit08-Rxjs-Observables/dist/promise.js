'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _rxjs = require('rxjs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var samplePromise = function samplePromise() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			return resolve('Promise was resolved');
		}, 2000);
		// setTimeout(() => reject('Promise was not resolved'), 2000);
	});
};

var observable = (0, _rxjs.from)(samplePromise());

observable.subscribe(function (data) {
	return console.log('Success: ' + data);
}, function (err) {
	return console.log('Error: ' + err);
}, function () {
	return console.log('Always there for you!');
} // Like finally in Promise
);

_http2.default.createServer(app).listen(3000);

console.log('Express server started on port 3000');