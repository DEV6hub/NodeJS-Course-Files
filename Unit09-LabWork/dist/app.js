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

var _db = require('./util/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));

app.use('/posts', _posts2.default);
app.use('/comments', _comments2.default);
app.use('/like', _like2.default);

_db2.default.connect();

_http2.default.createServer(app).listen(3000);

console.log('Express server start on port 3000');