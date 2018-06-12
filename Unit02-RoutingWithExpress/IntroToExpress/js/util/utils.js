exports.init = function () {

	/** Abstracted response mechanism.
	 *  Construct message using consistent message format below (messageFactory)
	 */

	this.jsonWriter = function (res, message) {
		res.writeHead(200, {
			'Content-Type' : 'application/json;charset=utf-8',	// *** Note: JSON content will always be returned
			'Access-Control-Allow-Origin' : '*',
			'CustomModule2HeaderInfo' : 'free ducks!',
			'Cache-Control' : 'no-cache',
			'Transfer-Encoding' : 'chunked'
		});
		res.end(JSON.stringify(message));
	};
};

/** Consistent message format. */
exports.messageFactory = function () {
	return {
		error : 0,
		errorMessage : '',
		data : null
	};
};

/** Consistent error message format. */
exports.throwError = function (error, errorMessage, res) {
	var message = exports.messageFactory();
	message.error = error;
	message.errorMessage = errorMessage;
	exports.jsonWriter(res, message);
};
