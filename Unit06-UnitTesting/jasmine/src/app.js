const add = (a, b) => a +b;

const mult = (a, b) => a * b;

const asyncThing = (callback) => setTimeout(() => callback(true), 1000);

const app = { add, mult, asyncThing };

export default app;