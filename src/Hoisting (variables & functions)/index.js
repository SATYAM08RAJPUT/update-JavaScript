console.log("Hoisting (variables & functions)")

// Practice 1: Variable Hoisting with var

console.log("hoisiting: ",a)
var a= 10;

// 🧪 Practice 2: Variable Hoisting with let

// console.log("Hoisting: ",b)
// let b = 20;


// Practice 3: Function Hoisting

sayHello()
function sayHello(){
    console.log("Hello")
}

// Practice 4: Function Expression Hoisting

// greet()
// var greet = function(){
//     console.log('Hi')
// }