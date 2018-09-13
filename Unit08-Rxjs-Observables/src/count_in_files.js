/*
Count number of vowels and consonants in given files.
 */
import fs from 'fs';
import { bindNodeCallback, of } from 'rxjs';
import { switchMap, last, mergeMap, scan } from 'rxjs/operators';

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// Read dir
const readDir$ = bindNodeCallback(fs.readdir);

// Read file
let readFiles = bindNodeCallback(fs.readFile);

// Get file content
let getFileContent = file => readFiles('./sample/'+file,{encoding: 'utf8'});

let count = (acc, current) => {

	let curr = current.toLowerCase();

	if(vowels.indexOf(curr) > -1) {

		if(acc.vowels[curr] === undefined) {
			acc.vowels[curr] = 1;
			return acc;
		}

		else {
			acc.vowels[curr] = acc.vowels[curr]+=1;
			return acc;
		}
		
	}

	else {

		if(acc.consonants[curr] === undefined) {
			acc.consonants[curr] = 1;
			return acc;
		}

		else {
			acc.consonants[curr] = acc.consonants[curr]+=1;
			return acc;
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

	return of([newVowelObject, newConsonantObject]);

};

let source = readDir$('./sample')
	.pipe(
		mergeMap(file => file),
		mergeMap(file => getFileContent(file)),
		switchMap(file => file),
		scan((fileArray, character) => {
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
		},['', '']),
		last(val => val),
		switchMap(file => file),
		switchMap(file => file),
		// count vowels, consonants
		scan((acc, current) => count(acc, current), {vowels: {}, consonants: {}}),
		last(value => value),
		mergeMap(file => sort(of(file))),
	)
;

source.subscribe(val => console.log('Number of vowels\n', val[0], '\n\nNumber of consonants\n', val[1]));

