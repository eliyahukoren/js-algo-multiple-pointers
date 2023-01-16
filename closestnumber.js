/*
Given a sorted array and a number x, find the pair in array whose sum is closest to x
*/

const closestNumber = (arr, n) => {
	let i = 0;
	let j = arr.length - 1;
	let result = [];

	while(i < j){
		let sum = arr[i] + arr[j];

		if (sum > n){
			j --;
		}else if(sum <= n){
			result[0] = arr[i]
			result[1] = arr[j];
			i ++;
		}
	}

	return result;
}

const closestNumberTwoArrays = (arr1, arr2, n) => {
	const arr3 = [...arr1, ...arr2];
	let i = 0;
	let j = arr3.length - 1;
	let result = [];

	while (i < j) {
		let sum = arr3[i] + arr3[j];

		if (sum > n) {
			j--;
		} else if (sum <= n) {
			result[0] = arr3[i];
			result[1] = arr3[j];
			break;
		}
	}

	return result;
}

module.exports = { closestNumber, closestNumberTwoArrays };