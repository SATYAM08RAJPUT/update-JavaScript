console.log("JavaScript- Loop Topic")
console.log("11-08-2025")
// Question.1: Print numbers from 1 to 10 using a for loop
console.log("Question.1:")

for(let i=1;i<=10;i++){
    console.log(i)
}

console.log('Question.2:')
// Question.2: Print even numbers between 1 and 50.

for(let i=0;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

console.log("Question.3")
// Question.3: Print odd numbers between 1 and 50.

for(let i=0;i<=50;i++){
    if(i%2 !==0){
        console.log(i)
    }
}

console.log("Question.4:")
// Question.4 Print the multiplication table of 5.

for(let i=1;i<=10;i++){
    console.log(i*5)
}

console.log("Question.5:")
//Question.5: Calculate the sum of numbers from 1 to 100.

let storeSum = 0
for(let i=1;i<=100;i++){
    storeSum += i
}
console.log(storeSum)

console.log("Question.6:")
// Question.6: Print the first 10 natural numbers in reverse order.

let storeReverseNumber = ""
for(let i=10;i>=0;i--){
    storeReverseNumber += i
}
console.log(storeReverseNumber)

 console.log("Question.7:")
// // Question.7: Find the factorial of a number (e.g., 5!)

let storeFactorial = 1;

for (let i=2;i<=5;i++){
    storeFactorial *= i
}
console.log(storeFactorial)

console.log("Question.8:")
//Question.8: Print squares of numbers from 1 to 10.

for(let i=1;i<=10;i++){
    console.log("squares of numbers:-",i*i)
}

console.log("Question.9:")
// Question.9: Count how many numbers between 1 and 100 are divisible by 3.

for(let i=1;i<=100;i++){
    if(i%3==0){
        console.log(i)
    }
}