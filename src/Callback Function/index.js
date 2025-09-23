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