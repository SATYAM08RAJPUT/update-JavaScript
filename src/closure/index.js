console.log('Closure')
// Closure: A closure is created when a function remembers the variables from its outer scope,
//  even after that outer function has finished executing.


// 🔹 Basic Example

function outerfunction(){
    let outerVariable = "I am from outer Scopr"

    function innerfunction(){
        console.log(outerVariable) 
    }
    return innerfunction
}

const closureExample = outerfunction()
closureExample()