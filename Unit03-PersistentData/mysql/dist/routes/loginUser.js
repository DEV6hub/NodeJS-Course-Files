'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _utils = require('../js/util/utils');

var _loginDAO = require('../js/dao/loginDAO');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', function (req, res) {
	var message = (0, _utils.messageFactory)();
	var paramsJSON = req.param('paramsJSON', null);
	var params = void 0;

	if (!paramsJSON) {
		(0, _utils.throwError)(10, 'Missing login values.', res);
		return;
	}

	params = JSON.parse(paramsJSON);
	if (!params.userName || !params.password) {
		(0, _utils.throwError)(20, 'Missing user name or password JSON.', res);
		return;
	}

	// Send user credentials to DAO for check against database
	(0, _loginDAO.loginUser)(res, params.userName, params.password, function (user) {
		// Database call is asynchronous, so this callback is invoked when there's a result to return
		console.log(user);
		message.data = user;
		(0, _utils.jsonWriter)(res, message);
	});
});

exports.default = router;