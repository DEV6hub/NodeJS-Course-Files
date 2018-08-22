import { messageFactory, throwError, jsonWriter } from '../js/util/utils';
import express from 'express';
const router = express.Router();

// Called from promise.js when route is /loginUser
router.post('/', (req, res) => {

	console.log(`Params: ${req.param('paramsJSON')}`);
	console.log(`Request body: ${req.body}`);

	// Create consistent message format
	let message = messageFactory();
	// paramsJSON is a field in the POSTed request, hopefully containing a JSON string
	let	paramsJSON = req.param('paramsJSON', null);
	let	params;

	if (!paramsJSON) {
		// Use consistent error mechanism/format
		throwError(10, 'Missing login values.', res);
		// Bail!
		return;
	}

	params = JSON.parse(paramsJSON);
	console.log(`Parsed params: ${params}`);

	// Ensure required fields POSTed in JSON string
	if (!params.userName || !params.password) {
		throwError(20, 'Missing user name or password JSON.', res);
		// Bail!
		return;
	}

	// We'll get the user from a database in the next module
	// For now, just echo back the username and password to ensure the route is wired correctly
	message.data = {
		userName : params.userName,
		password : params.password
	};

	// Write back to the client
	jsonWriter(res, message);
});

export default router;