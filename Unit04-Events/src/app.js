/**
 * Use "npm install" to install all required node modules
 *
 * Use the Chrome POSTMAN add-on or similar to issue
 * a POST request to http://localhost:3000/testEvent
 *
 * Monitor the console to see event broadcast message after a timeout.
 */

import os from 'os';
import path from 'path';
import express from 'express';
import util from 'util';
import events from 'events';
import { jsonWriter, messageFactory } from './js/util/utils';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';

const app = express();

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

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	app.use(errorHandler());
}

const router = express.Router();

router.head('/ping', (req, res) => {
	res.writeHead(200, {
		'Content-Type' : 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin' : '*',
		'FreeDucks' : true,
		'Cache-Control' : 'no-cache'
	});
	res.end();
});

// Set up the event listener
const eventEmitter = new events.EventEmitter();
// Listen for the 'inspect' event broadcast
eventEmitter.on('inspect', onInspect);

// Handle the 'inspect' event and use its data.
function onInspect(event) {
	console.log('Here you go:');
	console.log(util.inspect(event, { showHidden : false, depth : null, colors : true }));
}

router.post('/testEvent', (req, res) => {
	console.log('Test event route');
	setTimeout(() => {
		eventEmitter.emit('inspect', {data: [
				{test: 'one'},
				{test: 'two'}
			]});
	}, 3000);
	const message = messageFactory();
	jsonWriter(res, message);
	console.log('Starting...\nWait for 3 seconds');
});

app.use(router);

app.listen(app.get('port'), () => {
	console.log('HTTP/Express server listening on port ' + app.get('port'));
});
