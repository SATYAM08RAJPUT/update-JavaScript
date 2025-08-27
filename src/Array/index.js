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
console.log(array3)