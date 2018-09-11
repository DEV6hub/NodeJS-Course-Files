import express from 'express';
import { jsonWriter, messageFactory, throwError } from '../js/util/utils';
import { loginUser } from '../js/dao/loginDAO';
const router = express.Router();

router.post('/', function (req, res) {
	let message = messageFactory();
	const paramsJSON = req.param('paramsJSON', null);
	let params;

	if (!paramsJSON) {
		throwError(10, 'Missing login values.', res);
		return;
	}

	params = JSON.parse(paramsJSON);
	if (!params.userName || !params.password) {
		throwError(20, 'Missing user name or password JSON.', res);
		return;
	}

	// Send user credentials to DAO for check against database
	loginUser(res, params.userName, params.password, (user) => {
		// Database call is asynchronous, so this callback is invoked when there's a result to return
		console.log(user);
		message.data = user;
		jsonWriter(res, message);
	});
});

export default router;
