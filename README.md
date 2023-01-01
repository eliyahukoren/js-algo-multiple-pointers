## Udemy course - Javascript Algorithms and Data Structures Masterclass

![codewars](https://www.codewars.com/users/eliyahukoren/badges/large)

## 

![](https://img.shields.io/github/actions/workflow/status/eliyahukoren/js-algo-multiple-pointers/actions.yml?label=JS%20Algo%20Multiple%20Pointers&logo=logo)

![Language](https://img.shields.io/badge/Language-Javascript-coral)


## Find Duplicates

Implement a function called, **areThereDuplicates** which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false

areThereDuplicates(1, 2, 2) // true 

areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:

Time - O(n)

Space - O(n)

## Sum Zero

Write a function called **sumZero** which accepts a **sorted** array of integers.

The function should find the **first** pair where the sum is 0.

Return an array that includes both values that sum to zero or undefined if a pair does not exist.

Examples:

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]

sumZero([-2, 0, 1]) // undefined

sumZero([1, 2, 3]) // undefined

## Average Pairs

Write a function called **averagePair**. Given a **sorted** array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true

averagePair([1,3,3,5,6,7,10,12,19],8) // true

averagePair([-1,0,3,4,5,6], 4.1) // false

averagePair([],4) // false

## Multiple Pointers - isSubsequence

Write a function called **isSubsequence** which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true

isSubsequence('sing', 'sting'); // true

isSubsequence('abc', 'abracadabra'); // true

isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
