'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	
};

array = [1, 3, 5, 6, 8]
target = 6

const binarySearch(array, target, )

const inTheMiddle = Math.floor (array.length / 2 ) //  5 / 2 = 2. inTheMiddle = 2

array[inTheMiddle] = 5 // array[2] = 5
if (array[inTheMiddle] > target) --> false
if it is false, const newArr = array.slice(inTheMiddle)  // newArr = [5,6,8]
if it is true, const newArr = array.slice(0, inTheMiddle) // newArr = [1, 3]


newArr = [5,6,8]
const binarySearch(newArr, target)

const inTheMiddle = Math.floor (newArr.length / 2 ) //  3 / 2 = 1.5 inTheMiddle = 1

newArr[inTheMiddle] = 6 // newArr[1] = 6 
if (newArr[inTheMiddle] > target) --> false
if it is false, const newArr = newArr.slice(inTheMiddle)  // newArr = [6,8]
if it is true, const newArr = newArr.slice(0, inTheMiddle) // newArr = [5]

newArr = [6,8]
const binarySearch(newArr, target)

const inTheMiddle = Math.floor (newArr.length / 2 ) //  2 / 2 = 1 inTheMiddle = 1

newArr[inTheMiddle] = 8 // newArr[1] = 8
if (newArr[inTheMiddle] > target) --> true
if it is false, const newArr = newArr.slice(inTheMiddle)  // newArr = [8]
if it is true, const newArr = newArr.slice(0, inTheMiddle) // newArr = [6]

newArr = [6]
const binarySearch(newArr, target)
if newArr.length === 1, return newArr

//recursin 

array = [1, [3,5] 8]
target = 1

const binarySearch(array, target)

const inTheMiddle = Math.floor (array.length / 2 ) //  3 / 2 = 1.5. inTheMiddle = 1

array[inTheMiddle] = [3,5] // array[1] = [3,5]
if (Array.isArray(array[inTheMiddle])) binarySerach (array[inTheMiddle], target) // binarySerach([3,5], 1)

const inTheMiddle = Math.floor (array.length / 2 ) //  2 / 2 = 1 inTheMiddle = 1
array[inTheMiddle] = [5] // array[1] = [5]


if (array[inTheMiddle] > target) --> false
if it is false, const newArr = array.slice(inTheMiddle)  // newArr = [5,6,8]
if it is true, const newArr = array.slice(0, inTheMiddle) // newArr = [1, 3]


newArr = [5,6,8]
const binarySearch(newArr, target)

const inTheMiddle = Math.floor (newArr.length / 2 ) //  3 / 2 = 1.5 inTheMiddle = 1

newArr[inTheMiddle] = 6 // newArr[1] = 6 
if (newArr[inTheMiddle] > target) --> false
if it is false, const newArr = newArr.slice(inTheMiddle)  // newArr = [6,8]
if it is true, const newArr = newArr.slice(0, inTheMiddle) // newArr = [5]

newArr = [6,8]
const binarySearch(newArr, target)

const inTheMiddle = Math.floor (newArr.length / 2 ) //  2 / 2 = 1 inTheMiddle = 1

newArr[inTheMiddle] = 8 // newArr[1] = 8
if (newArr[inTheMiddle] > target) --> true
if it is false, const newArr = newArr.slice(inTheMiddle)  // newArr = [8]
if it is true, const newArr = newArr.slice(0, inTheMiddle) // newArr = [6]

newArr = [6]
const binarySearch(newArr, target)
if newArr.length === 1, return newArr



/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch