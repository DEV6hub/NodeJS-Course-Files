'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

var _comments = require('./routes/comments');

var _comments2 = _interopRequireDefault(_comments);

var _like = require('./routes/like');

var _like2 = _interopRequireDefault(_like);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('./util/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json()); // to support JSON-encoded bodies
app.use(_bodyParser2.default.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

app.use((0, _morgan2.default)('dev'));

app.use('/posts', _posts2.default);
app.use('/comments', _comments2.default);
app.use('/like', _like2.default);

// Connect to MySQL on start
_db2.default.connect(function (err) {
	if (err) {
		console.log('Unable to connect to MySQL.\n' + err);
		process.exit(1);
	} else {
		_http2.default.createServer(app).listen(3000, function () {
			console.log('Listening on port 3000...');
		});
	}
});