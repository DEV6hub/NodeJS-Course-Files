// https://github.com/caolan/nodeunit
// http://nodejs.org/docs/v0.4.2/api/assert.html

var utils = require('../js/util/utils'),
	fs = require('fs');

exports.testSomething = function (test) {
	test.expect(1);
	test.ok(true, 'this assertion should pass');
	test.done();
};

exports.testMessageFactory = function (test) {
	var message = utils.messageFactory();
	test.strictEqual(message.data, null, 'Message data is not null.');
	test.equal(typeof message, 'object', 'Message is not an object.');
	test.done();
};

// ADVANCED: Can test ansynchronous functions, such as file reads and database
// calls by overriding their methods during testing to make them synchronous.
exports.testAsyncFileRead = function (test) {
	var _readFile = fs.readFile;
	fs.readFile = function(path, callback){
	    // put mock file read here
	};

	// test function that uses fs.readFile

	// we're done
	fs.readFile = _readFile;
	test.done();
};

exports['Lemonade, that cool refreshing drink.'] = function (test) {
	test.ok(true, 'oopsie');
	test.done();
};

