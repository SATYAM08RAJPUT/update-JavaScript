console.log("this keyword")
// this: The this keyword in JavaScript is a special reference that changes meaning depending on how 
// and where it’s used. It doesn’t refer to the function itself, but to the object that is executing 
// the current function.

// 1. Global Context: In the browser, this in the global scope refers to the window object.
// In Node.js, it refers to global.

console.log(this)


// 2. Inside an Object Method: If this is used inside an object method,
//  it refers to the object that owns the method.

const person = {
    name:"Satyam",
    greet(){
        console.log('Hello ' + this.name)
    }
}
person.greet()

// 3. Inside a Function (non-strict mode): In a regular function, this defaults to the global object (window in browsers).