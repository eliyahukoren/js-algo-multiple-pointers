const power = (base, exponent) => {
	if( exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

const factorial = (num) => {
	if( num === 0) return 1;

	return num * factorial(num - 1);
}

const productOfArray = (arr) => {
	if (arr.length === 0) return 1;

	return arr[0] * productOfArray(arr.slice(1));
}

const recursiveRange = (num) => {
	if( num === 0) return 0;

	return num + recursiveRange(num - 1);
}

const countDown = (n) => {
	if (n <= 0 ){
		console.log('All done');
		return;
	}

	console.log(n);
	n--;

	countDown(n);
}

const fib = (num, memo={}) => {
	if( num <= 2) return 1;
	if( num in memo ) return memo[num];

	memo[num - 2] = fib(num - 2);
	memo[num - 1] = fib(num - 1);
	return memo[num - 2] + memo[num - 1];
}

module.exports = {
	power,
	factorial,
	productOfArray,
	recursiveRange,
	fib
};