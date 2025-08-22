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

let str8 = "Hello world, hello world!";
console.log("last indexOf:", str8.lastIndexOf("hello"))

let str9 = "Javascript is awesome, and I love coding in Javascript!";
console.log('last indexOf:', str9.lastIndexOf("Javascript",20))

let str10 = "abcabcabcabcabc";
console.log('Last Indexof:', str10.lastIndexOf("abc"))

let str11 = "the quick brown fox jumps over the lazy dog";
console.log('last Indexof', str11.lastIndexOf("the"))

console.log('Done')

// search() → Finds index using regex
console.log("Searching of String")

const text = "Please contact us at support@example.com for more details.";
console.log("search:",text.search("us"))

let text2 = "I love JavaScript!";
console.log('Searching a String: ', text2.search("JavaScript"))

let text3 = "My order id is 12345.";
console.log("Serching", text3.search(/[0-9]/))

let text4 = "Hello World!";
console.log("Searching:", text4.search(/\s/))

console.log('Done for Searching Method')

console.log('includes() → Checks if string contains substring')
// includes() → Checks if string contains substring

let text6 = "I love JavaScript";
console.log('includes', text6.includes('love'))


let fruit = "Mango";
console.log('includes:', fruit.includes("man"))
console.log("Case sensitive", fruit.toLocaleLowerCase().includes("man"))

let product = "Samsung Galaxy S21";
console.log("includes", product.includes("Galaxy"))

let email = "user@example.com";
console.log("includes:", email.includes("example"))
console.log("includes", email.includes("com"))

console.log("Done Includes method");

console.log("startsWith():")


// Example 2: With a Position Argument

let str12 = "Hello, world!";
console.log("startwith():", str12.startsWith("Hello"))
console.log("startwith(): ", str12.startsWith("world"))

let str13 = "JavaScript is awesome!";
console.log("startwith Position: ", str13.startsWith("is",11))
console.log("startwith Position: ", str13.startsWith("awesome",14))

let str14 = "JavaScript is awesome!";

console.log("startwith():", str14.startsWith("java"))

// endsWith() → Checks if string ends with given value
console.log("endsWith() → Checks if string ends with given value")

let str15 = "JavaScript is awesome!";
console.log("endwith():", str15.endsWith("awesome!"))
console.log("endwith(): ", str15.endsWith("Java",4))

console.log("Done for method")


// Extracting
console.log("Extracting")

let str16 = "Hello, world!";
console.log("slice: ", str16.slice(0,5))
console.log("Slice: ", str16.slice(7,13))
console.log("slice: ", str16.slice(0))
console.log("slice:",str16.slice(7))

// Negative Indices

let str17 = "Programming";
console.log("negative slice ", str17.slice(-5))
console.log("negative Slice:", str17.slice(-3,-1))

let str18 = "Automation";
console.log("Negative Slice: ", str18.slice(-7,-5))


// substring(start, end): Similar to slice but no negative index
console.log(" substring(start, end)")

let str19 = "Hello, World!";
console.log("substring:",str19.substring(5,7))

let str20 = "Programming";
console.log('substring:', str20.substring(4,7))

let str21 = "123456789";
console.log("substring:-", str21.substring(5) )

let str22 = "abcdef";
console.log("substring: ", str22.substring(4,3))

console.log('Done for method of Substring')

console.log("New Topic- substr")

let str23 = "Hello, World!";
console.log("substr: ", str23.substr(7,5))

let str24 = "satyam Rajput"
console.log("substr:", str24.substr(2,6))

let str25 = "Programming";
console.log('substr: ', str25.substr(6))

let str26 = "Frontend";
console.log("substr: ", str26.substr(-7,2))

console.log("Done for substr Topic")

// Modifying
console.log("New Method: Modifying")
console.log("touppercase() method")
// toUpperCase() → Converts to uppercase

let name = "CHATGRP";
console.log("name:", name.toLocaleLowerCase())


let userInput = "hello world";
console.log("touppercase(): ", userInput.toUpperCase())

let word = "javascript";
console.log("touppercase(): ", word.toUpperCase())

let fruits = ["apple", "banana", "cherry"];

let uppersCase = fruits.map(fruit => fruit.toUpperCase()); 
console.log("toyppercase: ",uppersCase)

let strHello = "HELLO";
console.log("tolowercase:", strHello.toLowerCase())

console.log("touppercase()")


console.log("Practice Questions for toLowerCase() in JavaScrip")