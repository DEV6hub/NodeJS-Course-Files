/**
 * Use "npm install" to install all required node modules
 *
 * Use the Chrome POSTMAN add-on or similar to issue
 * a POST request to http://localhost:3000/loginUser
 * with form field: paramsJSON = {"userName":"myUserName", "password":"myPassword"}
 */

import os from 'os';
// new modules
import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import path from 'path';
import ping from './routes/ping';
import loginUser from './routes/loginUser';
import shirts from './routes/shirts';

const app = express();

if (os.type() === 'Windows_NT') {
	console.log('Routing with Express: You\'re on Windows.');
} else {
	console.log('Routing with Express: You\'re on OSX or Linux.');
}

app.use(compression());
app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const env = process.env.NODE_ENV ||  'development';

if (env === 'development') {
	app.use(errorHandler());
}

// Load ping router, which has a head request at '/' registered to it
app.use('/ping', ping);
// Load LoginUser router, which has a post request at '/' registered to it
app.use('/loginUser', loginUser);

app.use('/shirts', shirts);

app.listen(app.get('port'), () => {
	console.log('HTTP/Express server listening on port ' + app.get('port'));
});
