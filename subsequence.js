const isSubsequence = (str1, str2) => {
	let len = 0;

	for (let i = 0; i < str1.length; i++) {
		for (let j = i; j < str2.length; j++) {
			if (str1[i] === str2[j]) {
				len++;
				break;
			}
		}

		if (str1.length === len) return true;
	}

	return false;
};

const isSubsequenceV2 = (str1, str2) => {
	let i = 0;
	let j = 0;

	if (!str1) return true;

	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return true;
		j++;
	}

	return false;
};

module.exports = {
	isSubsequence,
	isSubsequenceV2,
};
