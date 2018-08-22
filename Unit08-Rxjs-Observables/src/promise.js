import { from } from 'rxjs';

const samplePromise = function() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('Promise was resolved'), 2000);
		// setTimeout(() => reject('Promise was not resolved'), 2000);
	})
};

const observable = from(samplePromise());

observable.subscribe(
	data => console.log(`Success: ${data}`),
	err => console.log(`Error: ${err}`),
	() => console.log('Always there for you!')); // Like finally in Promise
