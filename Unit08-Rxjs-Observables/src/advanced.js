/*
Count number of vowels and consonants in given files.
 */

import fs from 'fs';
import { bindNodeCallback, of } from 'rxjs';
import { switchMap, last, mergeMap, scan } from 'rxjs/operators';

const vowels = ['a', 'e', 'i', 'o', 'u'];

// Read dir
const readDir$ = bindNodeCallback(fs.readdir);

// Read file
let readFiles = bindNodeCallback(fs.readFile);

// Get file content
let getFileContent = file => readFiles('./sample/'+file,{encoding: 'utf8'});

let sort = newFile => {

	let sortedVowelKeys = {}, sortedConsonantKeys = {};

	newFile.subscribe(file => {
		let vowelKeys = Object.keys(file.vowels).sort((a, b) => a > b);
		let consonantKeys = Object.keys(file.consonants).sort((a, b) => a > b);
		// console.log(vowelKeys, consonantKeys);
		sortedVowelKeys = vowelKeys.map(key => {
			sortedVowelKeys[key] = file.vowels[key];
			return sortedVowelKeys;
		});
		sortedConsonantKeys = consonantKeys.map(key => {
			sortedConsonantKeys[key] = file.consonants[key];
			return sortedConsonantKeys;
		});

	});

	return of([sortedVowelKeys[0], sortedConsonantKeys[0]]);

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
			else {
				fileArray[1]+=character;
				return fileArray;
			}
		},['', '']),
		last(val => val),
		switchMap(file => file),
		switchMap(file => file),
		// count vowels, consonants
		scan((acc, current) => {
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
		}, {vowels: {}, consonants: {}}),
		last(value => value),
		mergeMap(file => sort(of(file))),
	)
;

source.subscribe(val => console.log('Number of vowels\n', val[0], '\n\nNumber of consonants\n', val[1]));

