/**
 *
 * Node.js fs module provides POSIX standard features for working with File I/O
 * fs provides syncronous and asynchronous function signatures
 */

import fs from 'fs';

/****************************************************/

// Check if a file exists asynchronously (recommended for intensive processes)
const checkFile = (filename) => {
	fs.access(filename, (err) => {
		console.log(`${filename} ${err ? 'does not exist.\n' : 'exists.\n'}`);
	});
};

checkFile('file1.txt');
checkFile('doesnotexist.txt');

// Check if a file exists synchronously
const checkFileSync = (filename) => {
	try {
		fs.accessSync(filename);
		console.log(`${filename} found.\n`);
	} catch (err) {
		console.log(`${filename} cannot be found.\n`);
	}
};

checkFileSync('file1.txt');
checkFileSync('doesnotexist.txt');

/****************************************************/

// read a file

fs.readFile('file1.txt', {encoding: 'utf8'}, (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`${data}\n`);
	}
});

/****************************************************/

// write a file
const jsonData = {
	"thingOne" : "red",
	"thingTwo" : "blue",
	"config": {
		"option": true
	}
};

fs.writeFile('test.json', JSON.stringify(jsonData, null, 4), (err) => {
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




