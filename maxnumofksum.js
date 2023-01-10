/*
	Input: nums = [1,2,3,4], k = 5
	Output: 2
	Explanation: Starting with nums = [1,2,3,4]:
	- Remove numbers 1 and 4, then nums = [2,3]
	- Remove numbers 2 and 3, then nums = []
	There are no more pairs that sum up to 5, hence a total of 2 operations.

	[3, 1, 3, 4, 3] => (k 6) = > 1
	[1, 3, 3, 3, 4]
	[1, 3, 3, 3, 4, 5, 6, 7, 8]
	1 + 3 < 6
	next pair index 1 and 2
	3 + 3 = 6
	remove index 1, 2
	[1, 3, 4, 5, 6, 7, 8]
	next pair index 1, 2
	3 + 4 > 6 break, return 1

	[1, 4, 3]


	[4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4] => (k 2) => 2
	[1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5]

	
	[4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4] => (k 9) ~ 3
	[1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5]

*/

const maxOperations = (arr, k) => {
	arr.sort((a,b) => a - b);
	let count = 0;
	let i = 0;
	let j = arr.length - 1;
	let sum = 0;

	while(i < j){
		sum = arr[i] + arr[j];	
		
		if(sum === k){
			count ++;
			i += 1;
			j -= 1;
		}else if(sum < k){
			i += 1;
		}else{
			j -= 1;
		}
	}

	return count;
}

module.exports = { maxOperations };