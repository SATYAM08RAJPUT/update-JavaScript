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