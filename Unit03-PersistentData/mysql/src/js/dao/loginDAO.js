import { connection, throwError } from '../util/utils';

export const loginUser = (res, userName, password, callback) => {

	const sql = "SELECT user.userName\n" +
		"FROM user\n" +
		"WHERE\n" +
		"	user.userName = '" + userName + "'\n" +
		"	AND user.password  = '" + password + "'\n";

	connection.query(sql, (error, rows) => {
			if (error) {
				throwError(10, 'Error: ' + error, res);
				return;
			}
			if (rows.length === 0) {
				throwError(20, 'User not found in database.', res);
				return;
			}

			let user = {};
			rows.forEach(function (userRow) {
				user['userName'] = userRow.userName;
			});

			callback(user);
		}
	);
};