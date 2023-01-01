// Multiple pointers, head <-> tail pairs
// Given sorted array of integers.
// Return an array that includes both values that sum to zero or undefined if pair
// does not exist
const sumZero = (arr) => {
	if (arr.length === 0) return undefined;

	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];
		// we found zero sum, return
		if (sum === 0) {
			return [arr[left], arr[right]];
		}

		if (sum > 0) {
			// move right to the left side
			right--;
		} else {
			// move left to the right side
			left++;
		}
	}
};



module.exports = {
	sumZero,
};
