'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var jsonWriter = exports.jsonWriter = function jsonWriter(res, message) {
	res.writeHead(200, {
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin': '*',
		'CustomModule3HeaderInfo': 'free the ducks',
		'Cache-Control': 'no-cache',
		'Transfer-Encoding': 'chunked'
	});
	res.end(JSON.stringify(message));
};

var messageFactory = exports.messageFactory = function messageFactory() {
	return { error: 0, errorMessage: '', data: null };
};

var throwError = exports.throwError = function throwError(error, errorMessage, res) {
	var message = exports.messageFactory();
	message.error = error;
	message.errorMessage = errorMessage;
	jsonWriter(res, message);
};