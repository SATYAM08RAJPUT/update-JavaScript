console.log('Welcome to Array')
// In JavaScript, an array is a special type of object used to store multiple values in a single variable.
// Unlike regular objects, arrays are ordered, meaning the values are stored in a specific sequence 
// and can be accessed using an index (position).


// 1. push() : Adds one or more elements to the end of an array and returns the new length of the array.
let array1 = [10,20,30]
console.log("Push a Array: ",array1.push(40))
console.log(array1)

// 2. pop() : Removes the last element from an array and returns that element

let array2 = [12,13,14,15]
console.log("Pop Array: ", array2.pop())
console.log(array2)

// 3. shift(): Removes the first element from an array and returns that element.

let array3 = [16,17,18,19,20]
console.log(array3.shift())
console.log("shift() method: ",array3)

// 4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

let array4 = [21,22,23,24,25]
console.log(array4.unshift(20))
console.log("unshift method: ",array4)

// 5. splice():  Adds/removes elements from any position in the array.

let arr5 = [1, 2, 3, 4, 5];
console.log('slice: ', arr5.slice(1))

let arr6 = [10,20,30,40,50]
console.log("slice:", arr6.slice(4))

// 6. The splice(): method in JavaScript is used to add, remove, or replace elements in an array. 
// It modifies the original array in place and returns an array of the removed elements (if any).

let fruits = ['apple', 'banana', 'cherry', 'date'];
let removed= fruits.splice(1,3)
console.log('removed items:', removed)
console.log("fruits", fruits)


// Searching / Finding
console.log('Searching / Finding')

// indexOf topic

let nums = [5, 10, 15, 20, 25];
console.log("indexOf: ", nums.indexOf(20))

// lastIndexOf() topic

let arr7 = [12,23,34,56,20,20,10]
console.log("lastIndexof: ", arr7.lastIndexOf(20))

// includes()

let arr8 = [1,2,3,4,5,6,7,8]
console.log("Arr8: ",arr8.includes(6))

let arr9 = [10,11,12,24]
console.log('includes: ', arr9.includes(40))


// find() method

let arr10 = [12,23,45,56]
console.log("find: ", arr10.find((n) => n> 50))

let arr11  = [20,30,40,0,50]
console.log('Find Method: ', arr11.find((n) => n> 0))

// findIndex() method

let arr12 = [122,200,300,122]
console.log("findIndex():", arr12.findIndex((n) => n%5 ==0))


// Iteration method

// ForEach Method
let arr13 = [1,2,3,4,5,6]
arr13.forEach((n) => console.log("1-6 Number",n))

//  map() method\

arr13.map((n) => console.log("By map: ",n))

// Difference between a map & ForEach
