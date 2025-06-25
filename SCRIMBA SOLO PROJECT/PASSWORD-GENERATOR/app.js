
  let output = document.getElementById("pword")
  let output2 = document.getElementById("pword1")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const characters2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Arrays for Generated Passwords  
let password = []
let password2 = []
  
//Random function that matches a number to a character on the characters array
function randomCharacter() {
let random = Math.floor(Math.random()*91)+1

let firstCharacter = random + 1
//  console.log(firstCharacter)
let i = characters[firstCharacter] 
return i
}
// randomCharacter()

function randomCharacter2() {
    let random = Math.floor(Math.random()*62)+1
    
   let firstCharacter = random + 1
    //  console.log(firstCharacter)
    let i = characters[firstCharacter] 
    return i
  }
//  randomCharacter2()
 
//function that pushes the generated random charaters to the array to be temp
//stored and displayed
function generate1(){
  randomCharacter()
  for (let i = 0; i < 16; i++) {
   password.push(randomCharacter());}

  output.textContent = password.join("")
}


function generate2(){
  randomCharacter2()
 
  for (let i = 0; i < 16; i++) {
   password2.push(randomCharacter2());}

  output2.textContent = password2.join("")
}

//the generate button function that calls for new password and 
// also clears the array to make sure old and new password dont be displayed
function generate(){
  password = []
  password2 = []
   generate1()
   generate2()
}
console.log(characters2.length)
 
