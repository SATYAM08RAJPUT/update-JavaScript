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