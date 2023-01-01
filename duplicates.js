// [1, 2, 2]
//  i
// [1, 4, 5, 6, 2, 4, 1, 5, 8]
// [1, 1, 2, 4, 4, 5, 5, 6, 8]
//     j
const areThereDuplicates = function (...args) {
	if (args.length === 0) return false;

	args.sort((a, b) => a > b);

	let i = 0;
	let j = 1;

	while (j < args.length) {
		if (args[i] === args[j]) return true;

		i++;
		j++;
	}

	return false;
};

const areThereDuplicatesOneLiner = function () {
	return new Set(arguments).size !== arguments.length;
};

module.exports = {
	areThereDuplicates,
	areThereDuplicatesOneLiner,
};
