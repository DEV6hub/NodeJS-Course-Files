import mysql from 'mysql';

const connectionConfig = {
	host: 'localhost',
	user: 'nodeuser',
	password: 'password',
	database: 'social_media',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
};

const connection = mysql.createConnection(connectionConfig);

export default connection;
