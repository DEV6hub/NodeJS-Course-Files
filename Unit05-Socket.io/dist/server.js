'use strict';

var _connect = require('connect');

var _connect2 = _interopRequireDefault(_connect);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Lightweight temporary webserver to testing app in local dev enviornment.

var PORT = 8081;
var app = (0, _connect2.default)();
_http2.default.createServer(app).listen(PORT);
console.log('Server listening on port: ' + PORT);