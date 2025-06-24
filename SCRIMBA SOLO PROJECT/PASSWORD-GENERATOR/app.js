
  let output = document.getElementById("pword")
  let output2 = document.getElementById("pword1")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const characters2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


   let password = []
  let password2 = []
  

  function randomCharacter() {
    let random = Math.floor(Math.random()*91)+1
    
   let firstCharacter = random + 1
    //  console.log(firstCharacter)
    let i = characters[firstCharacter] 
    return i
  }
 randomCharacter()

 function randomCharacter2() {
    let random = Math.floor(Math.random()*62)+1
    
   let firstCharacter = random + 1
    //  console.log(firstCharacter)
    let i = characters[firstCharacter] 
    return i
  }
 randomCharacter2()

function generate2(){
  randomCharacter()
 password2[0] = randomCharacter2()
 password2[1] = randomCharacter2()
 password2[2] = randomCharacter2()
 password2[3] = randomCharacter2()
 password2[4] = randomCharacter2()
 password2[5] = randomCharacter2()
 password2[6] = randomCharacter2()
 password2[7] = randomCharacter2()
 password2[8] = randomCharacter2()
 password2[9] = randomCharacter2()
 password2[10] = randomCharacter2()
 password2[11] = randomCharacter2()
 password2[12] = randomCharacter2()
 password2[13] = randomCharacter2()
 password2[14] = randomCharacter2()
 password2[15] = randomCharacter2()

  output2.textContent = password2.join("")
}

function generate1(){
  randomCharacter()
password[0] = randomCharacter()
 password[1] = randomCharacter()
 password[2] = randomCharacter()
 password[3] = randomCharacter()
 password[4] = randomCharacter()
 password[5] = randomCharacter()
 password[6] = randomCharacter()
 password[7] = randomCharacter()
 password[8] = randomCharacter()
 password[9] = randomCharacter()
 password[10] = randomCharacter()
 password[11] = randomCharacter()
 password[12] = randomCharacter()
 password[13] = randomCharacter()
 password[14] = randomCharacter()
 password[15] = randomCharacter()

  output.textContent = password.join("")
}

function generate(){
   generate1()
   generate2()
}
console.log(characters2.length)
 
