//Question.1: Write a program that checks if a number is even or odd using if-else.
console.log("Question.1")

function makeEvenOdd(num){
    if(num%2==0){
        console.log('Number is Even')
    } else{
        console.log("Number is Odd")
    }
}
makeEvenOdd(6)
makeEvenOdd(9)
makeEvenOdd(89)

//Question.2: Write a program to print grade based on marks:
// 90+ → A, 80–89 → B, 70–79 → C, 60–69 → D, below 60 → F
console.log("Question.2")

function gradeCalculate(marks){
    if(marks>= 90){
        console.log("A Grade")
    } else if(marks>=80){
        console.log('B Grade')
    } else if(marks >=70){
        console.log('C Grade')
    }else if(marks >=60){
        console.log('D Grade')
    } else{
        console.log("F grade")
    }
}
gradeCalculate(90)
gradeCalculate(89)
gradeCalculate(50)
gradeCalculate(70)
gradeCalculate(60)

//Question.3: Write a program that finds the largest among three numbers using if-else-if.
console.log("Question.3")

function largestNumber(a,b,c){
    if(a>= b && a>= c){
        console.log("A is Greater")
    } else if(b>= c && b>=a){
        console.log("B is Greater")
    } else {
        console.log("C is smaller")
    }
}
largestNumber(90,45,89)
largestNumber(90,900,8)

//Question.4: Write a switch statement that prints the day of the week based on a number input (1 to 7).
console.log("Question.4")

function weekCalculate(num){
    if(num==1){
        console.log('Sunday')
    } else if(num == 2){
        console.log("Monday")
    }else if(num == 3){
        console.log("Tuesday")
    }else if(num == 4){
        console.log("Wednesday")
    }else if(num == 5){
        console.log("Thruday")
    }else if(num == 6){
        console.log("Friday")
    } else if(num == 7){
        console.log("Saturday")
    } else{
        console.log("Invalid Number")
    }
}

weekCalculate(1)
weekCalculate(6)
weekCalculate(90)
weekCalculate(778)
weekCalculate(3)

// Question.5: Write a program that takes a color input and returns what action should be taken:
// "red" → "Stop", "yellow" → "Ready", "green" → "Go"
console.log("Question.5")

function trafficLight(light){
    if(light =="red"){
        console.log("Please Stop")
    } else if(light == "yellow"){
        console.log("Reddy to Go")
    } else if(light == "green"){
        console.log("Go GO")
    } else{
        console.log("invalid input")
    }
} 
trafficLight("red")
trafficLight("yellow")
trafficLight("green")
trafficLight("blue")

// Question.6:  Create a switch-based calculator that takes two numbers and an operator (+, -, *, /) and returns the result.
console.log("Question.6")

function calculate(a,b,type){
    if(type=="add"){
    console.log("add:-", a+b)        
    } else if (type =="sub"){
        console.log("sub:-",a-b)
    } else if (type =="multi"){
        console.log("Multi:-",a*b)
    } else if (type =="divide"){
        console.log("Divide:-",a/b)
    }
}
calculate(4,5,"add")
calculate(8,9,"sub")
calculate(3,3,"multi")
calculate(50,5,"divide")

// Question.7:  Write a program to check whether a given year is a leap year or not using if-else.
console.log("Question.7")

function calculateLeapYear(leapYear){
        if(leapYear % 4 ==  0 && leapYear %400 == 0){
                console.log("this is leap Year")
        } else{
            console.log('this is not a leap Year')
        }
}   
calculateLeapYear(2024)
calculateLeapYear(2025)
calculateLeapYear(1900)
calculateLeapYear(2000)

// Question.8: Write a program that checks whether a given character is a vowel or consonant using switch.
console.log("Question.8")

function checkVowel(vowel){
    if(vowel =="a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
        console.log("Vowel")
    } else{
        console.log("Consonant")
    }
}
checkVowel("w")
checkVowel("a")
checkVowel("s")
checkVowel("z")
checkVowel("i")
checkVowel("b")

console.log('Done Noraml Conditional Questions')
console.log("Functions with return-05/08/2025")

//Question.1: Write a function add(a, b) that returns the sum of two numbers.
console.log("Starting: Functions with return")

function addFunReturn(a,b){
    return a+b
}
const firstReturn = addFunReturn(7,3)
console.log("Add two Values:-",firstReturn)

// Area of Rectangle
//Question:2:- Create a function areaRectangle(length, width) that returns the area.
console.log("Question.2")

function calculateAreaReturn(l,w){
    return l*w
}
const secondReturn = calculateAreaReturn(20,8)
console.log("Area of areaRectangle:-",secondReturn)

// Convert Celsius to Fahrenheit
//Question.3: Write a function toFahrenheit(celsius) that returns the temperature in Fahrenheit.
console.log("Question.3:")

function toFahrenheit(celsius){
    return (celsius*(9/5)+32)
}
const thrirdReturn = toFahrenheit(78)
console.log(thrirdReturn)


// Even or Odd Checker
// Question.4: Write a function isEven(num) that returns "Even" or "Odd".
console.log("Question.4:")

function isEven(num){
    return num %2 === 0 ? "Event Number" : "Odd Number"
}
const fourReturn = isEven(2)
const fiveFirstReturn = isEven(9)
console.log(fourReturn)
console.log(fiveFirstReturn)