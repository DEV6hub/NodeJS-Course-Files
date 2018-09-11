"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var add = function add(number1, number2) {
	return number1 + number2;
};

var mul = function mul(number1, number2) {
	return number1 * number2;
};

var asyncTest = function asyncTest(done) {
	return setTimeout(function () {
		done();
	}, 2000);
};

var app = { add: add, mul: mul, asyncTest: asyncTest };

exports.default = app;