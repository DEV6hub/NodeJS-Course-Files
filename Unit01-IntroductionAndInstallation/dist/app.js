'use strict';

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * If using an IDE, such as IntelliJ, there may be support for
 * running the server in a window.
 *
 * Use the Chrome POSTMAN add-on or similar to issue
 * a GET request to http://localhost:3000
 * or simply go to http://localhost:3000/ in a browser
 *
 * View the HTTP headers to ensure 'NewTorontoGroup' is there.
 */

var port = 3000;

if (_os2.default.type() === 'Windows_NT') {
  console.log('Introduction: You\'re on Windows.');
} else {
  console.log('Introduction: You\'re on OSX or Linux.');
}

_http2.default.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html', 'NewTorontoGroup': 'Node.js Training' });
  res.end('<h1 style="font-family: Calibri, Arial, Sans-Serif">Welcome to NodeJS!</h1>');
}).listen(port);