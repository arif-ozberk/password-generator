const copyButton = document.querySelector(".copyButton")
const generatedPassword = document.querySelector(".generatedPassword")


const generateButton = document.querySelector(".generateButton")
const lenghtSlider = document.querySelector(".lenghtSlider")

const passwordLengthText = document.querySelector(".passwordLengthText")

let passwordLength 
let createdPassword = ""

const settingsUl = document.querySelectorAll(".settingsUl li input")
const uL = document.querySelectorAll(".kevser")
const lowercase = document.querySelector(".lowercase")
const uppercase = document.querySelector(".uppercase")
const numbers = document.querySelector(".numbers")
const duplicate = document.querySelector(".duplicate")
const symbols = document.querySelector(".symbols")

let charList = []

const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolList = [",", ".", "-", "/", "*", "?", "$", "+", "&", "!", "'", "^", "=", ":", "_"]
const lowerCharList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCharList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// Number list functions
function addNumbers(){
    charList.push(numberList)
}

function removeNumbers() {
    charList.splice(charList.indexOf(numberList), 1)
}


// Symbol list functions
function addSymbols(){
    charList.push(symbolList)
}

function removeSymbols() {
    charList.splice(charList.indexOf(symbolList), 1)
}


// Uppercase character list functions
function upperCaseFunc(){
    charList.push(upperCharList)
}

function removeUpperCase() {
    charList.splice(charList.indexOf(upperCharList), 1)
}


// Lowercase character list functions
function lowerCaseFunc(){
    charList.push(lowerCharList)
}

function removeLowerCase() {
    charList.splice(charList.indexOf(lowerCharList), 1)
}


function deleteDuplicates(){
    let cleanedList = []
    for(let j=0 ; j<charList.length; j++){
        let index = charList[j]
        charList.includes(index) ? "" : cleanedList.push(index) 
    }
    charList = cleanedList
    return charList
}


function config(){
    uL.forEach((input, index) =>{
        input.addEventListener("input", ()=>{
            if(input.className.includes("lowercase")){
                if(input.checked) {
                    console.log("lowercase bastim")
                    lowerCaseFunc()
                }
                else {
                    console.log("lower çektim")
                    removeLowerCase()
                }
            }
            
            if(input.className.includes("uppercase")){
                if(input.checked) {
                    upperCaseFunc()
                }
                else {
                    removeUpperCase()
                }
            }
            
            if(input.className.includes("numbers")){
                if(input.checked) {
                    addNumbers()
                }
                else {
                    removeNumbers()
                }
            }

            if (input.className.includes("symbols")) {
                if(input.checked) {
                    addSymbols()
                }
                else {
                    removeSymbols()
                }
            }
            
            if(input.className.includes("duplicate") && input.checked){
                deleteDuplicates()
                console.log("duplicate")
            }
        })
    })
    
}


function passwordLengthFunc(){
    passwordLength = lenghtSlider.value
    passwordLengthText.innerHTML = passwordLength
}


function generatePassword(){
    if(charList.length === 0) {
        window.alert("Please choose at least one option!")
        return
    }

    passwordLengthFunc()

    createdPassword = ""
    for(let k=0; k<passwordLength; k++){
        let charPool = charList[Math.floor(Math.random() * charList.length)]
        let randomCharacter = charPool[Math.floor(Math.random() * charPool.length)]
        createdPassword += randomCharacter
    }

    generatedPassword.innerHTML = createdPassword
}


function copyToClipboard(){
    if(createdPassword.length === 0) {
        window.alert("Nothing to be copied!")
        return
    }

    navigator.clipboard.writeText(createdPassword);
}


window.addEventListener("load", ()=>{
    config()
    passwordLengthFunc()
})


copyButton.addEventListener("click", copyToClipboard)
generateButton.addEventListener("click", generatePassword)
lenghtSlider.addEventListener("change", passwordLengthFunc)
