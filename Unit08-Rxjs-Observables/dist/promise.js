'use strict';

var _rxjs = require('rxjs');

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
}); // Like finally in Promise