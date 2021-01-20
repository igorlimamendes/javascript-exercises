function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((a, b) => a + b, 0);
}

function multiply (arr) {
	return arr.reduce((a, b) => a * b, 1);
}

function power(a, b) {
	return a ** b;
}

function factorial(num) {
	let fac = 1;
	
	for (let i = num; i >= 1; i--) {
		fac *= num;
		num--;
	}

	return fac;
}
