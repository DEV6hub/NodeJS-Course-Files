/**
 * Use "npm install" to install all required node modules
 *
 * Use the Chrome POSTMAN add-on or similar to issue
 * a POST request to http://localhost:3000/loginUser
 * with form field: paramsJSON = {"userName":"myUserName", "password":"myPassword"}
 */

var os = require('os'),
	express = require('express'),
	http = require('http'),
	path = require('path'),
	utils = require('./js/util/utils'),
	compression = require('compression'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler'),
	path = require('path'),
	ping = require('./routes/ping'),
	loginUser = require('./routes/loginUser');

var app = express();

utils.init();

if (os.type() === 'Windows_NT') {
	console.log('Persistent Data: You\'re on Windows.');
} else {
	console.log('Persistent Data: You\'re on OSX or Linux.');
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


app.listen(app.get('port'), function () {
	console.log('HTTP/Express server listening on port ' + app.get('port'));
});
