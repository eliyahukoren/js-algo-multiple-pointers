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
