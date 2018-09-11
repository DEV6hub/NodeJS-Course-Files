'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utils = require('../js/util/utils');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Called from promise.js when route is /loginUser
router.post('/', function (req, res) {

	console.log('Params: ' + req.param('paramsJSON'));
	console.log('Request body: ' + req.body);

	// Create consistent message format
	var message = (0, _utils.messageFactory)();
	// paramsJSON is a field in the POSTed request, hopefully containing a JSON string
	var paramsJSON = req.param('paramsJSON', null);
	var params = void 0;

	if (!paramsJSON) {
		// Use consistent error mechanism/format
		(0, _utils.throwError)(10, 'Missing login values.', res);
		// Bail!
		return;
	}

	params = JSON.parse(paramsJSON);
	console.log('Parsed params: ' + params);

	// Ensure required fields POSTed in JSON string
	if (!params.userName || !params.password) {
		(0, _utils.throwError)(20, 'Missing user name or password JSON.', res);
		// Bail!
		return;
	}

	// We'll get the user from a database in the next module
	// For now, just echo back the username and password to ensure the route is wired correctly
	message.data = {
		userName: params.userName,
		password: params.password
	};

	// Write back to the client
	(0, _utils.jsonWriter)(res, message);
});

exports.default = router;