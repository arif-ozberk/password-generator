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

function addNumbers(){
    charList.push("0","1","2","3","4","5","6","7","8","9")
}

function addSymbols(){
    charList.push("," , "." , "-" , "/" , "*" , "?" , "$" , "+" , "&" , "!" , "'" , "^" , "=" , ":" , "_")
}


function upperCaseFunc(){
    charList.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")

}

function lowerCaseFunc(){
    charList.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
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
            if(input.className.includes("lowercase") && input.checked){
                lowerCaseFunc()
                console.log("lowercase")
            }
            
            if(input.className.includes("uppercase") && input.checked){
                upperCaseFunc()
                console.log("uppercase")
            }
            
            if(input.className.includes("numbers") && input.checked){
                addNumbers()
                console.log("numbers")
            }
            
            if(input.className.includes("duplicate") && input.checked){
                deleteDuplicates()
                console.log("duplicate")
            }
            
            if(input.className.includes("symbols") && input.checked){
                addSymbols()
                console.log("symbols")
            }
                
    
        } )
    })
    
}

function passwordLengthFunc(){
    passwordLength = lenghtSlider.value
    passwordLengthText.innerHTML = passwordLength
    // console.log(passwordLength)
}

function generatePassword(){
    config()
    passwordLengthFunc()
    // console.log(charList)
    createdPassword = ""
    for(let k=0; k<passwordLength; k++){
        let randomIndex = charList[(Math.floor(Math.random()*charList.length))]
        // console.log(randomIndex)
        createdPassword += randomIndex

    }
    generatedPassword.innerHTML = createdPassword
    console.log(createdPassword)
}

function copyToClipboard(){
    navigator.clipboard.writeText(createdPassword);
}

window.addEventListener("load", ()=>{
    config()
    passwordLengthFunc()
})

copyButton.addEventListener("click", copyToClipboard)
generateButton.addEventListener("click", generatePassword)
lenghtSlider.addEventListener("change", passwordLengthFunc)
