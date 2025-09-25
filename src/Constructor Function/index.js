console.log("Welcome to constructor function")
// A constructor function in JavaScript is a special type of function used to create and initialize objects.
// It works like a blueprint for making multiple objects with similar properties and methods.

// Rules of Constructor Functions
// Name starts with a Capital letter (by convention).
// Example: Person, Car, User.
// You call it with the new keyword to create an object.
// Inside it, this refers to the new object being created.

function Person(name,age){
    this.name= name;
    this.age = age;
    this.greet = function(){
        console.log(this.name)
        console.log(this.age)
    }
}
const const1 = new Person('satyam', "25")
const1.greet()
const const2 = new Person('Himanshu',34)
const2.greet()
const const3 = new Person("Nushu", "40")
const3.greet()


function Car(model, price,year){
    this.model = model;
    this.price = price;
    this.year =year
    this.start= function(){
        console.log(`${this.model} ${this.price} ${this.year}`)
    }
}

const car1 = new Car('2024','200000','2024')
console.log(car1)
const car2 = new Car('1221','Honda','233')
console.log(car2)