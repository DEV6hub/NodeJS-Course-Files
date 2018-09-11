"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loginUser = undefined;

var _utils = require("../util/utils");

var loginUser = exports.loginUser = function loginUser(res, userName, password, callback) {

	var sql = "SELECT user.userName\n" + "FROM user\n" + "WHERE\n" + "	user.userName = '" + userName + "'\n" + "	AND user.password  = '" + password + "'\n";

	_utils.connection.query(sql, function (error, rows) {
		if (error) {
			(0, _utils.throwError)(10, 'Error: ' + error, res);
			return;
		}
		if (rows.length === 0) {
			(0, _utils.throwError)(20, 'User not found in database.', res);
			return;
		}

		var user = {};
		rows.forEach(function (userRow) {
			user['userName'] = userRow.userName;
		});

		callback(user);
	});
};