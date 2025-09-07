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
    greet: function(){
        console.log("Hello " + this.name)
    }
}
person1.greet()