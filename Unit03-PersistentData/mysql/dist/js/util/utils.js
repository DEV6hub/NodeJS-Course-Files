'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.throwError = exports.messageFactory = exports.jsonWriter = exports.connection = undefined;

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// See mysql-data/README.txt for instructions on setting up and populating the database
// and setting up this user account
var connectionConfig = {
	host: 'localhost',
	user: 'nodeuser',
	password: 'password',
	database: 'nodejs',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
};

// This connection will be used in the DAO
var connection = _mysql2.default.createConnection(connectionConfig);
connection.connect();

exports.connection = connection;
var jsonWriter = exports.jsonWriter = function jsonWriter(res, message) {
	res.writeHead(200, {
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin': '*',
		'CustomModule3HeaderInfo': 'free the ducks',
		'Cache-Control': 'no-cache',
		'Transfer-Encoding': 'chunked'
	});
	res.end(JSON.stringify(message));
};

var messageFactory = exports.messageFactory = function messageFactory() {
	return { error: 0, errorMessage: '', data: null };
};

var throwError = exports.throwError = function throwError(error, errorMessage, res) {
	var message = messageFactory();
	message.error = error;
	message.errorMessage = errorMessage;
	jsonWriter(res, message);
};