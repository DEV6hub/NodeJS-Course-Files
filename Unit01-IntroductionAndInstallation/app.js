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

var os = require('os'),
	http = require('http');

var port = 3000;

if (os.type() === 'Windows_NT') {
	console.log('Introduction: You\'re on Windows.');
} else {
	console.log('Introduction: You\'re on OSX or Linux.');
}

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html', 'NewTorontoGroup' : 'Node.js Training'});
	res.end('<h1 style="font-family: Calibri, Arial, Sans-Serif">Welcome to NodeJS!</h1>');
}).listen(port);
