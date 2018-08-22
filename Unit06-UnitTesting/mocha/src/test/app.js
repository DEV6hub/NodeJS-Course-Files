const add = (number1, number2) => number1 + number2;

const mul = (number1, number2) => number1 * number2;

const asyncTest = (done) => {
	return setTimeout(() => {
		done();
	}, 2000);
};

const app = { add, mul, asyncTest };

export default app;
