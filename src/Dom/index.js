console.log("WELCOME TO DOM")
let getID = document.getElementById("app")
console.log("GetId: ",getID)
getID.innerHTML = "WELCOME TO DOM";
getID.innerHTML = "WECOME TO SECOND DOM";
getID.innerText ="WELCOME G"
getID.textContent = "Welcome"

let addClass = document.querySelector('.add')
console.log("Add a class: ",addClass)
addClass.innerHTML = "Welcome to class"

let subclass = document.querySelectorAll('div')[0]
console.log("all Div: ",subclass)
subclass.innerText  =" SATYAM RAJPUT";

let createPara = document.createElement("p");
console.log(createPara)
createPara.innerText = "WELCOME TO PARA"
addClass.appendChild(createPara)
console.log(addClass)