console.log("Now String Topic")
//Question:  What is a String in JavaScript?
// Answer:  A string is a sequence of characters enclosed in single quotes (''), double quotes (""), or backticks (``).

// Commonly Used String Methods

// 1. Searching: 

// indexOf() → Finds the first occurrence
// lastIndexOf() → Finds the last occurrence
// search() → Finds index using regex
// includes() → Checks if string contains substring
// startsWith() → Checks if string starts with given value
// endsWith() → Checks if string ends with given value

// indexOf() →

let message = "Hello, welcome to JavaScript world!";
console.log("indexOf:",message.indexOf("w"))
console.log("indexOf:",message.indexOf("c"))

let str = "banana bread is better than banana cake";
console.log("indexOf: ",str.indexOf("banana"))

let str1 = "I love coding in JavaScript. JavaScript is powerful.";
console.log("indexOf:", str1.indexOf("JavaScript"))

let str2 = "this is just a test";
console.log('indexOf: ', str2.indexOf("t"))

console.log("lastIndexOf() topic")
// lastIndexOf(): 

let str3 = "hello world, hello universe";
console.log('Find Last indexOf:',str3.lastIndexOf("o"))

let str4 = "the quick brown fox jumps over the lazy dog";
console.log('lastIndexOf:',str4.lastIndexOf("a"))


let str5 = "apple banana apple grape apple";
console.log("lastindex.of:",str5.lastIndexOf("apple"))


let str6 = "learning JavaScript is fun";
console.log("last indexOf:", str6.lastIndexOf("z"))

let str7 = "this is a test, test it out";
console.log("last indexof:",str7.lastIndexOf("test"))