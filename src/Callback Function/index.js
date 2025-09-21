console.log("Topic of callback function")
// Callback Function:A callback function is a function that is passed as an argument 
// to another function and is executed after some operation is completed.

// 👉 In simple words:
// “You give a function to another function, and that function will call it later.”

// Example 1: Basic Callback

function greet(name,callback){
    console.log("Hello "+ name);
    callback()
}

function saybye(){
    console.log("Goodbye !!")
}

greet("satyam", saybye)

// 🔹 Example 2: Callback with Anonymous Function

function process(num,callback){
    console.log("Processing num: ", num)
    callback(num)
}

process(5, function(result) {
    console.log("Square is: ", result*result)
});

// 🔹 Example 3: Callbacks in Asynchronous Code (setTimeout)

console.log('start')
setTimeout(function() {
    console.log("this is run after 2 sec")
},3000)
console.log('end')

// Why Use Callbacks?
// To make sure a function runs after another finishes.
// Very useful in asynchronous tasks (e.g., fetching data, timers, events).

// More examles for callback function