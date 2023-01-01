// [1, 2, 2]
//  i
// [1, 4, 5, 6, 2, 4, 1, 5, 8]
// [1, 1, 2, 4, 4, 5, 5, 6, 8]
//     j 
const areThereDuplicates = function(...args){
	if (args.length === 0) return false;
	
	args.sort((a, b) => a > b);

	let i = 0;
	let j = 1;

	while(j < args.length){
		if( args[i] === args[j]) return true;

		i ++;
		j ++;
	}

	return false;
};

const areThereDuplicatesOneLiner = function(){
	return new Set(arguments).size !== arguments.length;
}


//  i
// [1, 1, 1, 1, 1, 2]
//     j
// Multiple Pointers started from the left side of array
const countUniqueValues = (arr) => {
	if( arr.length == 0) return 0;

	let i = 0;

	for (let j = 1; j < arr.length; j++){
		if(arr[i] !== arr[j]){
			i++;
			arr[i] = arr[j];
		}
	}

	// finally return number of unique integers
	return i + 1;
};


// Multiple pointers, head <-> tail pairs
// Given sorted array of integers.
// Return an array that includes both values that sum to zero or undefined if pair
// does not exist
const sumZero = (arr) => {
	if (arr.length === 0) return undefined;

	let left = 0;
	let right = arr.length - 1;

	while(left < right){
		let sum = arr[left] + arr[right]
		// we found zero sum, return 
		if( sum === 0){
			return [arr[left], arr[right]];
		}

		if (sum > 0){
			// move right to the left side
			right --;
		}else{
			// move left to the right side
			left ++;
		}
	}
}

module.exports = {
	areThereDuplicates,
	areThereDuplicatesOneLiner,
	countUniqueValues,
	sumZero,
};
