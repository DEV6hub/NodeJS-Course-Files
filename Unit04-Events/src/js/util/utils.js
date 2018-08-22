export const jsonWriter = (res, message) => {
	res.writeHead(200, {
		'Content-Type' : 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin' : '*',
		'CustomModule3HeaderInfo' : 'free the ducks',
		'Cache-Control' : 'no-cache',
		'Transfer-Encoding' : 'chunked'
	});
	res.end(JSON.stringify(message));
};

export const messageFactory = () => (
	{error : 0, errorMessage : '', data : null}
);

export const throwError = (error, errorMessage, res) => {
	let message = exports.messageFactory();
	message.error = error;
	message.errorMessage = errorMessage;
	jsonWriter(res, message);
};
