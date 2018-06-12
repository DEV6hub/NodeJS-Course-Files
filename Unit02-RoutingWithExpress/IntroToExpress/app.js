/**
 * Use "npm install" to install all required node modules
 *
 * Use the Chrome POSTMAN add-on or similar to issue
 * a POST request to http://localhost:3000/loginUser
 * with form field: paramsJSON = {"userName":"myUserName", "password":"myPassword"}
 */

var os = require('os'),
	http = require('http'),

	// new modules
	express = require('express'),
	compression = require('compression'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler'),
	path = require('path'),
	utils = require('./js/util/utils'),
	ping = require('./routes/ping'),
	loginUser = require('./routes/loginUser');
	shirts = require('./routes/shirts');

var app = express();

utils.init();
 
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

var env = process.env.NODE_ENV ||  'development';
if (env === 'development') {
	app.use(errorHandler());
}

// Load ping router, which has a head request at '/' registered to it
app.use('/ping', ping);
// Load LoginUser router, which has a post request at '/' registered to it
app.use('/loginUser', loginUser);

app.use('/shirts', shirts)

app.listen(app.get('port'), function () {
	console.log('HTTP/Express server listening on port ' + app.get('port'));
});
