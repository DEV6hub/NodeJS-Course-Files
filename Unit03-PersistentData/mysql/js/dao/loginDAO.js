var utils = require('../util/utils');

exports.loginUser = function (res, userName, password, callback) {

	var sql = "SELECT user.userName\n" +
		"FROM user\n" +
		"WHERE\n" +
		"	user.userName = '" + userName + "'\n" +
		"	AND user.password  = '" + password + "'\n";

	utils.connection.query(sql,
		function (error, rows) {
			if (error) {
				utils.throwError(10, 'Error: ' + error, res);
				return;
			}
			if (rows.length === 0) {
				utils.throwError(20, 'User not found in database.', res);
				return;
			}

			var user = {};
			rows.forEach(function (userRow) {
				user['userName'] = userRow.userName;
			});

			callback(user);
		}
	);
};

