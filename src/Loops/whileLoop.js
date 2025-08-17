console.log("Welcome to While Loop")

console.log("Question.1: ")
//Question.1: 1 se 10 tak numbers print karna

let i=1;
while (i<=10) {
    console.log(i)
    i++;
}

console.log("Question.2: ")
// Question.2: 10 se 1 tak reverse counting

let i1 =10;
while (i1>=1) {
    console.log(i1);
    i1--
}

console.log("Question.3: ")
// Question.3: 5 ka table print karna

let i2 = 1;
while (i2<=10) {
    console.log(i2*5)
    i2++
}

console.log("Question.4: ")
// Question.4:  Sum of first 5 natural numbers; 

let i3= 1;
let storefirst = 0;

while (i3<=5) {
    console.log(i3);
    storefirst +=i3
    i3++
}
console.log("Natural Number: ",storefirst)

console.log('Question.5:')
// Even numbers from 2 to 20

let i4 = 2;
while (i4<=20) {
    console.log(i4)
    i4 += 2
}

console.log("Question.6: ")
// Question.6: Countdown for Blast 🚀

let second = 5
while (second>0) {
    console.log("Blst in " + second + "...")
    second--
}
console.log("Blast Off")

console.log("Question.7: ")
// Question.7: String ke characters print karna

let string = "Hello Satyam"
let i5 =0
while (i5 < string.length) {
    console.log(string[i5])
    i5++
}


console.log("Question.8: ")
// Odd numbers from 1 to 15
let i6 = 1;

while (i6<=15) {
    if(i6 %2 !== 0){
        console.log(i6 +  " Number is odd")
    } else{
        console.log(i6 + " Number is Even")
    }
    i6++
}

console.log("Quetion.9: ")
// Sum numbers from 1 to 15

let i7 = 1;

while (i7<=20) {
    if(i7%2===0){
        console.log(i7 + " Number is Even")
    }else{
        console.log(i7 + " Number is Odd")
    }
    i7++   
}

console.log("Question.10: ")
// Question.10: Reverse a number

let i8 = 123456;
console.log(new Date())
