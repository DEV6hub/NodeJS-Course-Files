mysql = require('mysql');

exports.init = function () {

	// See mysql-data/README.txt for instructions on setting up and populating the database
	// and setting up this user account
	this.connectionConfig = {
		host : 'localhost',
		user : 'nodeuser',
		password : '',
		database : 'nodejs',
		socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
	};

	// This connection will be used in the DAO
	this.connection = mysql.createConnection(this.connectionConfig);
	this.connection.connect();

	this.jsonWriter = function (res, message) {
		res.writeHead(200, {
			'Content-Type' : 'application/json;charset=utf-8',
			'Access-Control-Allow-Origin' : '*',
			'CustomModule3HeaderInfo' : 'free the ducks',
			'Cache-Control' : 'no-cache',
			'Transfer-Encoding' : 'chunked'
		});
		res.end(JSON.stringify(message));
	};
};

exports.messageFactory = function () {
	return {
		error : 0,
		errorMessage : '',
		data : null
	};
};

exports.throwError = function (error, errorMessage, res) {
	var message = exports.messageFactory();
	message.error = error;
	message.errorMessage = errorMessage;
	exports.jsonWriter(res, message);
};
