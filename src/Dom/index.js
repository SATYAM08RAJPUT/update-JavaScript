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
console.log("Seen append of a para into a Div: ",addClass)

let btn = document.getElementById("btn")
console.log(btn)

btn.addEventListener('click',function(){
    alert('Weocme to Buton')
    addClass.style.backGroundColor = "red"
})

let headingId = document.getElementById("title")
console.log(headingId)

let chnageBtn =document.querySelector('.btnChange')
console.log(chnageBtn)

chnageBtn.addEventListener('click',() => {
    headingId.textContent = "Hi Kishor"
})

// Toggle Dark Mode (Change Styles)

let tooglebtn = document.getElementById("toggle")
console.log("toggleBtn", tooglebtn)

tooglebtn.addEventListener('click',() => {
    document.body.style.backgroundColor = "black"
})
// Done Toggle

// Add New List Item

let fruits = document.getElementById("fruitId")
console.log("All Fruits Name: ",fruits)
let addFruitsbtn = document.querySelector(".fruitsClass")
console.log("Add Fruit Button: ",addFruitsbtn)

addFruitsbtn.addEventListener('click',() => {
    let createLi = document.createElement('li')
    console.log("Create Id: ",createLi)
    createLi.textContent = "Mango"
    fruits.append(createLi)
})

//  Done of add list Items
// Delete an Element
console.log("Delete a element")

let paraId = document.getElementById("para")
console.log(paraId)

const deltBtn =  document.querySelector(".dltBtn")
console.log(deltBtn)

deltBtn.addEventListener('click',() => {
    console.log('Delete for a Item')
    paraId.style.backgroundColor ="red"
    paraId.remove()
})
console.log("complete a Delete Properties")

console.log("Change Image on Hover")