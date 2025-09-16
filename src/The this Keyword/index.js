console.log("this keyword")
// this: The this keyword in JavaScript is a special reference that changes meaning depending on how 
// and where it’s used. It doesn’t refer to the function itself, but to the object that is executing 
// the current function.
console.log(this)

// 1. Global Context: In the browser, this in the global scope refers to the window object.
// In Node.js, it refers to global.