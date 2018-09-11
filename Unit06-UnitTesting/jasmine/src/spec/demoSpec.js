import app from '../app';

describe('app.add', () => {
	it('should add two positive numbers', () => {
		const x = app.add(1, 2);
		expect(x).toEqual(3);
	});

	it('should add a postive and a negative number', () => {
		const x = app.add(1, -1);
		expect(x).toEqual(0);
	});

	it('should add two negative numbers', () => {
		const x = app.add(-1, -1);
		expect(x).toEqual(-2);
	});
});

describe('app.mult', () => {
	it('should multiply two positive numbers', () => {
		const x = app.mult(1, 2);
		expect(x).toEqual(2);
	});

	it('should multiply a positive and a negative number', () => {
		const x = app.mult(1, -2);
		expect(x).toEqual(-2);
	});

	it('should multiply two negative numbers', () => {
		const x = app.mult(-2, -2);
		expect(x).toEqual(4);
	});
});

describe('disabled suite', () => {
	it('disabled test case', () => {
		const x = 1 + 1;
		expect(x).toEqual(2);
	});
});

describe('async tests', () => {
	let x = 0;
	let flag = false;
	runs(() => {
		app.asyncThing((value) => {
			flag = true;
			if (value) {
				x = x + 1;
			} else {
				x = x - 1;
			}
		});
	});
	waitsFor(() => {
		return flag;
	});
	runs(() => {
		expect(x).toEqual(1);
		expect(x).not.toEqual(-1);
	});
});
