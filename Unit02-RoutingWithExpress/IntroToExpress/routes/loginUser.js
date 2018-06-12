var utils = require('../js/util/utils');
var express = require('express');
var router = express.Router();

// Called from app.js when route is /loginUser
router.post('/',  function (req, res) {

	console.log(req.param('paramsJSON'))
	console.log(req.body);

	// Create consistent message format
	var message = utils.messageFactory(),
	// paramsJSON is a field in the POSTed request, hopefully containing a JSON string
		paramsJSON = req.param('paramsJSON', null),
		params;

	if (!paramsJSON) {
		// Use consistent error mechanism/format
		utils.throwError(10, 'Missing login values.', res);
		// Bail!
		return;
	}

	params = JSON.parse(paramsJSON);
	console.log(params)
	// Ensure required fields POSTed in JSON string
	if (!params.userName || !params.password) {
		utils.throwError(20, 'Missing user name or password JSON.', res);
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
	utils.jsonWriter(res, message);
});

module.exports = router;