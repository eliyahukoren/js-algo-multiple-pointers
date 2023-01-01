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

const averagePair = (arr, target) => {
	if(arr.length === 0) return false;
	
	let i = 0;
	let j = arr.length - 1;

	while(i < j){
		let avrg = (arr[i] + arr[j]) / 2;
		if(avrg === target){
			return true;
		}else if(avrg > target){
			j--;
		}else{
			i++;
		}
	}

	return false;
}

const isSubsequence = (str1, str2) => {
	let len = 0;

	for(let i = 0; i < str1.length; i ++){
		for(let j = i; j < str2.length; j ++){
			if( str1[i] === str2[j]){
				len ++;
				break;
			}
		}

		if(str1.length === len) return true;
	}

	return false;
}

const isSubsequenceV2 = (str1, str2) => {
	let i = 0;
	let j = 0;
	
	if (!str1) return true;

	while(j < str2.length){
		if( str2[j] === str1[i]) i++;
		if( i === str1.length) return true;
		j++;
	}

	return false;
};


module.exports = {
	areThereDuplicates,
	areThereDuplicatesOneLiner,
	countUniqueValues,
	sumZero,
	averagePair,
	isSubsequence,
	isSubsequenceV2,
};
