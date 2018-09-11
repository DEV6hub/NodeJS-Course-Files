'use strict';

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _utils = require('./js/util/utils');

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Use "npm install" to install all required node modules
 *
 * Use the Chrome POSTMAN add-on or similar to issue
 * a POST request to http://localhost:3000/testEvent
 *
 * Monitor the console to see event broadcast message after a timeout.
 */

var app = (0, _express2.default)();

if (_os2.default.type() === 'Windows_NT') {
	console.log('Events: You\'re on Windows.');
} else {
	console.log('Events: You\'re on OSX or Linux.');
}

app.use((0, _compression2.default)());
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
	app.use((0, _errorhandler2.default)());
};

var router = _express2.default.Router();

router.head('/ping', function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin': '*',
		'FreeDucks': true,
		'Cache-Control': 'no-cache'
	});
	res.end();
});

// Set up the event listener
var eventEmitter = new _events2.default.EventEmitter();
// Listen for the 'inspect' event broadcast
eventEmitter.on('inspect', onInspect);

// Handle the 'inspect' event and use its data.
function onInspect(event) {
	console.log('Here you go:');
	console.log(_util2.default.inspect(event, { showHidden: false, depth: null, colors: true }));
}

router.post('/testEvent', function (req, res) {
	console.log('Test event route');
	setTimeout(function () {
		eventEmitter.emit('inspect', { data: [{ test: 'one' }, { test: 'two' }] });
	}, 3000);
	var message = (0, _utils.messageFactory)();
	(0, _utils.jsonWriter)(res, message);
	console.log('Starting...\nWait for 3 seconds');
});

app.use(router);

app.listen(app.get('port'), function () {
	console.log('HTTP/Express server listening on port ' + app.get('port'));
});