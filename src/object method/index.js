// Object: An object in JavaScript is a collection of key-value pairs.Keys are called properties.
// Values can be anything → string, number, array, function, another object.

// Creating an object
console.log("Creating an object")

const car = {
    brand: "Tesla",
    colur:"red",
    speed: 200
}
console.log(car)
console.log("Speed: ",car.speed)
console.log("color:",car['brand'])


// Adding & Modifying Properties

const person = {
    name:"satyam",
    age:"25"
}
person.address = "Pundri Kalan"
person.age = 26
console.log(person)

// 3. Methods in Objects: A method is just a function inside an object.

const person1 = {
    name:"satyam",
    age:"25",
    greet: function(){
        console.log("Hello " + this.name)
    },
    greet1: function(){
        console.log("Age: ",this.age)
    }

}
person1.greet()
person1.greet1()

// 4. Short-hand Method Syntax (ES6)

const person2 = {
    name:"Rajput",
    age:"26",
    address:"Bijnor",
    sayhi(){
        console.log(`Hi, I'm ${this.name}`)
    },
    sayHi(){
        console.log(`Hello my age is ${this.age}`)
    },
    sayhello(){
        console.log(`Hello My Address: ${this.address}`)
    }
}
person2.sayhi()
person2.sayHi()
person2.sayhello()


// 5. Nested Objects

const person3 = {
    name: "satyam",
    age:"27",
    marks:{
        mark:"90",
        science:"25"
    }
}
console.log("Access Object: ",person3)
console.log("Science marks: ",person3.marks.science)
console.log("mark: ", person3.marks.mark)

// 6. Object Methods (Built-in): JavaScript gives us built-in methods to work with objects:
console.log('Object method')

const person4 = { brand: "BMW", model: "X5", year: 2022 }
console.log(person4)
console.log(Object.keys(person4))
console.log(Object.values(person4))
console.log(Object.entries(person4))


// 7. Copying Objects

console.log("Copy Object")
const person5 = {a:1,b:2}
console.log(person5)
const person6 ={...person5}
console.log("Copy Object: ",person6)

// 8. Object.freeze() → Prevent changes

const person7 = { name: "Raj", age: 25 };

console.log(Object.freeze(person7))
// person7.age = 27;

// 3. Object.seal() 
const person8  = { brand: "BMW", year: 2022 };
console.log(Object.seal(person8))
person8.year  = 2025
console.log(person8)

// 4. Object.create() → Create object with prototype

const animal = {
    sound(){
        console.log("Some sound")
    }
}

const dog = Object.create(animal)
dog.sound()


// 🔹 5. Object.hasOwn() (ES2022) → Check if property exists (own property only)

const person9 = { name: "Aman", age: 22 };

console.log(Object.hasOwn(person9,"name"))
console.log(Object.hasOwn(person9,"city"))


// 6. Object.getOwnPropertyNames() → Get all property names

const person10 = {x:1,y:2}
console.log(Object.getOwnPropertyNames(person10))

const person11 = {name:"Rahul",age:"23"}
console.log(person11)

// 10. Object.is() → Compare values strictly (better than === in some cases):

const person12 = {name:"Satyam", age:"2"}
console.log(person12)
console.log(new Date())
console.log("End Object")

// The this Keyword