/**
 * Use "npm install" to install all required node modules
 *
 * Use the Chrome POSTMAN add-on or similar to issue
 * a POST request to http://localhost:3000/testEvent
 *
 * Monitor the console to see event broadcast message after a timeout.
 */

var os = require('os'),
	express = require('express'),
	http = require('http'),
	path = require('path'),
	utils = require('./js/util/utils'),
	util = require('util'),
	compression = require('compression'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler')
	events = require('events');

var app = express();
utils.init();

if (os.type() === 'Windows_NT') {
	console.log('Events: You\'re on Windows.');
} else {
	console.log('Events: You\'re on OSX or Linux.');
}

app.use(compression());
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development'
if (env === 'development') {
	app.use(errorHandler());
};

var router = express.Router();

router.head('/ping', function (req, res) {
	res.writeHead(200, {
		'Content-Type' : 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin' : '*',
		'FreeDucks' : true,
		'Cache-Control' : 'no-cache'
	});
	res.end();
})

// Set up the event listener
var eventEmitter = new events.EventEmitter();
// Listen for the 'inspect' event broadcast
eventEmitter.on('inspect', onInspect);

// Handle the 'inspect' event and use its data.
function onInspect(event) {
	console.log('Here you go:');
	console.log(util.inspect(event, { showHidden : false, depth : null, colors : true }));
}

router.post('/testEvent', function (req, res) {
		console.log('Test event route');
		setTimeout(function () {
			eventEmitter.emit('inspect', {data: [
				{test: 'one'},
				{test: 'two'}
			]});
		}, 3000);
		var message = utils.messageFactory();
		utils.jsonWriter(res, message);
		console.log('Starting...');
		console.log('Wait for 3 seconds');
});
app.use(router);

app.listen(app.get('port'), function () {
	console.log('HTTP/Express server listening on port ' + app.get('port'));
});
