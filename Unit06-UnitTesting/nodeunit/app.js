/**
 * Use "npm install" to install all required node modules
 *
 * Run the unit test via your IDE or on the command line:
 *
 * https://www.jetbrains.com/webstorm/webhelp/unit-testing-node-js.html#enable_nodeunit
 * or
 * nodeunit test1.js {requires you install nodeunit globally: "npm install -g nodeunit"}
 *
 * Then run tests through browser: test/test.html
 *
 */

var os = require('os'),
	express = require('express'),
	http = require('http'),
	path = require('path'),
	compression = require('compression'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler');

var app = express();

if (os.type() === 'Windows_NT') {
	console.log('Testing: You\'re on Windows.');
} else {
	console.log('Testing: You\'re on OSX or Linux.');
}

app.use(compression());
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
	app.use(errorHandler());
}

var router = express.Router();
router.head('/ping', function (req, res) {
	res.writeHead(200, {
		'Content-Type' : 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin' : '*',
		'FreeDucks' : true,
		'Cache-Control' : 'no-cache'
	});
	res.end();
});
app.use(router);

app.listen(app.get('port'), function () {
	console.log('HTTP/Express server listening on port ' + app.get('port'));
});
