var express = require('express'),
    utils = require('../js/util/utils'),
    loginDAO = require('../js/dao/loginDAO'),
    router = express.Router();

router.post('/', function (req, res) {
	var message = utils.messageFactory(),
		paramsJSON = req.param('paramsJSON', null),
		params;

	if (!paramsJSON) {
		utils.throwError(10, 'Missing login values.', res);
		return;
	}

	params = JSON.parse(paramsJSON);
	if (!params.userName || !params.password) {
		utils.throwError(20, 'Missing user name or password JSON.', res);
		return;
	}

	// Send user credentials to DAO for check against database
	loginDAO.loginUser(res, params.userName, params.password, function (user) {
		// Database call is asynchronous, so this callback is invoked when there's a result to return
		message.data = user;
		utils.jsonWriter(res, message);
	});
});

module.exports = router;
