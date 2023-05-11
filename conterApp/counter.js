let countEl = document.getElementById(" count-el")
let counter = 0
let savePrevious = document.getElementById("save-el")
let welcomeEl = document.getElementById("welcome-el")


let name = " Welcome back Idris"
let reset = 0

function increment() {
    countEl.innerText = counter++
}

welcomeEl.innerText = name

function welcomeBack() {
    welcomeEl.innerText = name
}

function save() {
    let contain = counter + "-"
    savePrevious.innerText += contain
}

let  button = document.getElementById("reset-data")
 button = document.querySelector('button');
button.addEventListener('click', () => {
    increment()
});




