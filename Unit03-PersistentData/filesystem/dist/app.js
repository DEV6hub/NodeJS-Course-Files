'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/****************************************************/

// Check if a file exists asynchronously (recommended for intensive processes)
var checkFile = function checkFile(filename) {
	_fs2.default.access(filename, function (err) {
		console.log(filename + ' ' + (err ? 'does not exist.\n' : 'exists.\n'));
	});
}; /**
    *
    * Node.js fs module provides POSIX standard features for working with File I/O
    * fs provides syncronous and asynchronous function signatures
    */

checkFile('file1.txt');
checkFile('doesnotexist.txt');

// Check if a file exists synchronously
var checkFileSync = function checkFileSync(filename) {
	try {
		_fs2.default.accessSync(filename);
		console.log(filename + ' found.\n');
	} catch (err) {
		console.log(filename + ' cannot be found.\n');
	}
};

checkFileSync('file1.txt');
checkFileSync('doesnotexist.txt');

/****************************************************/

// read a file

_fs2.default.readFile('file1.txt', { encoding: 'utf8' }, function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data + '\n');
	}
});

/****************************************************/

// write a file
var jsonData = {
	"thingOne": "red",
	"thingTwo": "blue",
	"config": {
		"option": true
	}
};

_fs2.default.writeFile('test.json', JSON.stringify(jsonData, null, 4), function (err) {
	if (err) {
		console.log('Failed to write test.json file\n');
	} else {
		console.log('test.json successfully written to filesystem\n');
	}
});

/*
import http from 'http';
// request is a writeable stream
const request = http.request({
  host: 'localhost',
  port: 3000,
  path: '/users',
  method: 'POST'
}, (response) => {
  //response is a readable stream
  const responseString = '';
  response.setEncoding('utf8');
  response.on('end', () => {
    // finished streaming response back
    console.log(responseString)
  })
  response.on('data', (chunk) => {
    responseString += chunk;
  })
});
request.on('error', (e) => {
  console.log('error submitting request');
});
request.write('postBody');
request.end();
*/