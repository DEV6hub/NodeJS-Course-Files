'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/** Abstracted response mechanism.
 *  Construct message using consistent message format below (messageFactory)
 */
var jsonWriter = exports.jsonWriter = function jsonWriter(res, message) {
	res.writeHead(200, {
		'Content-Type': 'application/json;charset=utf-8', // *** Note: JSON content will always be returned
		'Access-Control-Allow-Origin': '*',
		'CustomModule2HeaderInfo': 'free ducks!',
		'Cache-Control': 'no-cache',
		'Transfer-Encoding': 'chunked'
	});
	res.end(JSON.stringify(message));
};

/** Consistent message format. */
var messageFactory = exports.messageFactory = function messageFactory() {
	return { error: 0, errorMessage: '', data: null };
};

/** Consistent error message format. */
var throwError = exports.throwError = function throwError(error, errorMessage, res) {
	var message = messageFactory();
	message.error = error;
	message.errorMessage = errorMessage;
	jsonWriter(res, message);
};