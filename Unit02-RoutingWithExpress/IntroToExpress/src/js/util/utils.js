/** Abstracted response mechanism.
 *  Construct message using consistent message format below (messageFactory)
 */
export const jsonWriter = (res, message) => {
	res.writeHead(200, {
		'Content-Type' : 'application/json;charset=utf-8',	// *** Note: JSON content will always be returned
		'Access-Control-Allow-Origin' : '*',
		'CustomModule2HeaderInfo' : 'free ducks!',
		'Cache-Control' : 'no-cache',
		'Transfer-Encoding' : 'chunked'
	});
	res.end(JSON.stringify(message));
};

/** Consistent message format. */
export const messageFactory = () => (
	{ error : 0, errorMessage : '', data : null }
);

/** Consistent error message format. */
export const throwError = (error, errorMessage, res) => {
	let message = messageFactory();
	message.error = error;
	message.errorMessage = errorMessage;
	jsonWriter(res, message);
};