import mysql from 'mysql';

// See mysql-data/README.txt for instructions on setting up and populating the database
// and setting up this user account
const connectionConfig = {
	host : 'localhost',
	user : 'nodeuser',
	password : 'password',
	database : 'nodejs',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
};

// This connection will be used in the DAO
const connection = mysql.createConnection(connectionConfig);
connection.connect();

export { connection };

export const jsonWriter = (res, message) => {
	res.writeHead(200, {
		'Content-Type' : 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin' : '*',
		'CustomModule3HeaderInfo' : 'free the ducks',
		'Cache-Control' : 'no-cache',
		'Transfer-Encoding' : 'chunked'
	});
	res.end(JSON.stringify(message));
};

export const messageFactory = () => (
	{ error : 0, errorMessage : '', data : null }
);

export const throwError = (error, errorMessage, res) => {
	let message = messageFactory();
	message.error = error;
	message.errorMessage = errorMessage;
	jsonWriter(res, message);
};