exports.init = function () {

	this.jsonWriter = function (res, message) {
		res.writeHead(200, {
			'Content-Type' : 'application/json;charset=utf-8',
			'Access-Control-Allow-Origin' : '*',
			'CustomModule3HeaderInfo' : 'free the ducks',
			'Cache-Control' : 'no-cache',
			'Transfer-Encoding' : 'chunked'
		});
		res.end(JSON.stringify(message));
	};
};

exports.messageFactory = function () {
	return {
		error : 0,
		errorMessage : '',
		data : null
	};
};

exports.throwError = function (error, errorMessage, res) {
	var message = exports.messageFactory();
	message.error = error;
	message.errorMessage = errorMessage;
	exports.jsonWriter(res, message);
};
