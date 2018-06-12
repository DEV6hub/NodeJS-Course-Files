/**
 *
 * Node.js fs module provides POSIX standard features for working with File I/O
 * fs provides syncronous and asynchronous function signatures
 */

var fs = require('fs');


/****************************************************/

// Check if a file exists asynchronously (recommended for intensive processes)
function checkFile(filename) {
  fs.exists(filename, function (exists) {
    if (exists) {
      console.log(filename + ' found.');
    } else {
      console.log(filename + ' not found.');
    }
  });
};

checkFile('file1.txt');
checkFile('doesnotexist.txt');

// Check if a file exists synchronously
function checkFileSync(filename) {
  try {
    var exists = fs.existsSync('file1.txt');
    if (exists) {
      console.log(filename + ' found.');
    } else {
      console.log(filename + ' not found.');
    }
  } catch (e) {
    console.log(e);
  }
}

checkFileSync('file1.txt');
checkFileSync('doesnotexist.txt');

/****************************************************/

// read a file

fs.readFile('file1.txt', {encoding: 'utf8'}, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

/****************************************************/

// write a file
var jsonData = {
  'thingOne' : 'red',
  'thingTwo' : 'blue',
  'config': {
    'option': true,
  }
};
fs.writeFile('test.json', JSON.stringify(jsonData, null, 4), function (err) {
  if (err) {
    console.log('failed to write test.json file');
  } else {
    console.log('test.json successfully written to filesystem');
  }
});

/*
var http = require('http');
// request is a writeable stream
var request = http.request({
  host: 'localhost',
  port: 3000,
  path: '/users',
  method: 'POST'
}, function (response) {
  //response is a readable stream
  var responseString = '';
  response.setEncoding('utf8');
  response.on('end', function () {
    // finished streaming response back
    console.log(responseString)
  })
  response.on('data', function (chunk) {
    responseString += chunk;
  })
});
request.on('error', function (e) {
  console.log('error submitting request');
});
request.write('postBody');
request.end();
*/




