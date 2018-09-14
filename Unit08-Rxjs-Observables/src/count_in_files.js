/*
Count number of vowels and consonants in given files.
 */
import fs from 'fs';
import { bindNodeCallback,from, of } from 'rxjs';
import { switchMap, last, mergeMap, scan } from 'rxjs/operators';

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// Read dir
const readDir$ = bindNodeCallback(fs.readdir);

// Read file
let readFiles = bindNodeCallback(fs.readFile);

// Get file content
let getFileContent = file => readFiles('./sample/'+file,{encoding: 'utf8'});

let gather = (fileArray, character) => {
	//gather vowels
	if (vowels.indexOf(character) > -1) {
		fileArray[0]+=character;
		return fileArray;
	}
	// gather consonants
	else if(consonants.indexOf(character) > -1) {
		fileArray[1]+=character;
		return fileArray;
	}
	return fileArray;
};

let count = (totalCount, current) => {

	let curr = current.toLowerCase();

	if(vowels.indexOf(curr) > -1) {

		if(totalCount.vowels[curr] === undefined) {
			totalCount.vowels[curr] = 1;
			return totalCount;
		}

		else {
			totalCount.vowels[curr] = totalCount.vowels[curr]+=1;
			return totalCount;
		}

	}

	else {

		if(totalCount.consonants[curr] === undefined) {
			totalCount.consonants[curr] = 1;
			return totalCount;
		}

		else {
			totalCount.consonants[curr] = totalCount.consonants[curr]+=1;
			return totalCount;
		}

	}

};
// sort object in alphabetical order
let sort = newFile => {

	let newVowelObject = {}, newConsonantObject = {};

	newFile.subscribe(file => {

		const vowelKeys = Object.keys(file.vowels);
		const consonantKeys = Object.keys(file.consonants);
		const sortedVowelKeys = vowelKeys.sort((a, b) => a > b ? 1 : -1);
		const sortedConsonantKeys = consonantKeys.sort((a, b) => a > b ? 1 : -1);

		sortedVowelKeys.forEach(key => {
			newVowelObject[key] = file.vowels[key];
		});

		sortedConsonantKeys.forEach(key => {
			newConsonantObject[key] = file.consonants[key];
		});
	});

	return from([newVowelObject, newConsonantObject]);

};

let source = readDir$('./sample')
	.pipe(
		mergeMap(file => file),
		mergeMap(file => getFileContent(file)),
		switchMap(file => file),
		scan((fileArray, character) => gather(fileArray, character),['', '']),
		last(val => val),
		switchMap(file => file),
		switchMap(file => file),
		// count vowels, consonants
		scan((totalCount, current) => count(totalCount, current), {vowels: {}, consonants: {}}),
		last(value => value),
		mergeMap(file => sort(of(file))),
	)
;

source.subscribe(val => console.log(val));
