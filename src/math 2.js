var foo = 30; // does not create window.foo

const sum = (a, b) => a + b;
const numbers = [5, 10, 15, 20, 25, foo];

export { sum, numbers };