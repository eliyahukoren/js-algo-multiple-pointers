//  i
// [1, 1, 1, 1, 1, 2]
//     j
// Multiple Pointers started from the left side of array
const countUniqueValues = (arr) => {
	if (arr.length == 0) return 0;

	let i = 0;

	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}

	// finally return number of unique integers
	return i + 1;
};



module.exports = {
	countUniqueValues,
};
