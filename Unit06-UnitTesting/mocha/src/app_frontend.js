const add = (number1, number2) => number1 + number2;

const mul = (number1, number2) => number1 * number2;

const asyncTest = (done) => {
	return setTimeout(() => {
		console.log('Async task finished');
		done();
	}, 2000);
};

const app = { add, mul, asyncTest };