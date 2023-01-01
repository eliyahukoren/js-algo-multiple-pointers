const averagePair = (arr, target) => {
	if (arr.length === 0) return false;

	let i = 0;
	let j = arr.length - 1;

	while (i < j) {
		let avrg = (arr[i] + arr[j]) / 2;
		if (avrg === target) {
			return true;
		} else if (avrg > target) {
			j--;
		} else {
			i++;
		}
	}

	return false;
};

module.exports = {
	averagePair,
};