import mysql from 'mysql';

const connectionConfig = {
	host: 'localhost',
	user: 'root',
	password: 'root1234',
	database: 'social_media',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
}

const connection = mysql.createConnection(connectionConfig);

export default connection;