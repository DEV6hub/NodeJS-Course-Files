'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _rxjs = require('rxjs');

var _operators = require('rxjs/operators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vowels = ['a', 'e', 'i', 'o', 'u']; /*
                                        Count number of vowels and consonants in given files.
                                         */

var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// Read dir
var readDir$ = (0, _rxjs.bindNodeCallback)(_fs2.default.readdir);

// Read file
var readFiles = (0, _rxjs.bindNodeCallback)(_fs2.default.readFile);

// Get file content
var getFileContent = function getFileContent(file) {
	return readFiles('./sample/' + file, { encoding: 'utf8' });
};

// sort object in alphabetical order
var sort = function sort(newFile) {

	var newVowelObject = {},
	    newConsonantObject = {};

	newFile.subscribe(function (file) {

		var vowelKeys = Object.keys(file.vowels);
		var consonantKeys = Object.keys(file.consonants);
		var sortedVowelKeys = vowelKeys.sort(function (a, b) {
			return a > b ? 1 : -1;
		});
		var sortedConsonantKeys = consonantKeys.sort(function (a, b) {
			return a > b ? 1 : -1;
		});

		sortedVowelKeys.forEach(function (key) {
			newVowelObject[key] = file.vowels[key];
		});

		sortedConsonantKeys.forEach(function (key) {
			newConsonantObject[key] = file.consonants[key];
		});
	});

	return (0, _rxjs.of)([newVowelObject, newConsonantObject]);
};

var source = readDir$('./sample').pipe((0, _operators.mergeMap)(function (file) {
	return file;
}), (0, _operators.mergeMap)(function (file) {
	return getFileContent(file);
}), (0, _operators.switchMap)(function (file) {
	return file;
}), (0, _operators.scan)(function (fileArray, character) {
	//gather vowels
	if (vowels.indexOf(character) > -1) {
		fileArray[0] += character;
		return fileArray;
	}
	// gather consonants
	else if (consonants.indexOf(character) > -1) {
			fileArray[1] += character;
			return fileArray;
		}
	return fileArray;
}, ['', '']), (0, _operators.last)(function (val) {
	return val;
}), (0, _operators.switchMap)(function (file) {
	return file;
}), (0, _operators.switchMap)(function (file) {
	return file;
}),
// count vowels, consonants
(0, _operators.scan)(function (acc, current) {
	var curr = current.toLowerCase();
	if (vowels.indexOf(curr) > -1) {
		if (acc.vowels[curr] === undefined) {
			acc.vowels[curr] = 1;
			return acc;
		} else {
			acc.vowels[curr] = acc.vowels[curr] += 1;
			return acc;
		}
	} else {
		if (acc.consonants[curr] === undefined) {
			acc.consonants[curr] = 1;
			return acc;
		} else {
			acc.consonants[curr] = acc.consonants[curr] += 1;
			return acc;
		}
	}
}, { vowels: {}, consonants: {} }), (0, _operators.last)(function (value) {
	return value;
}), (0, _operators.mergeMap)(function (file) {
	return sort((0, _rxjs.of)(file));
}));

source.subscribe(function (val) {
	return console.log('Number of vowels\n', val[0], '\n\nNumber of consonants\n', val[1]);
});