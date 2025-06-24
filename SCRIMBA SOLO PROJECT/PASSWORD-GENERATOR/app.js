
  let output = document.getElementById("pword")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

   let password = ["","","","","","","","","","","","","","","",""]
  



  function randomCharacter() {
    let random = Math.floor(Math.random()*91)+1
    
   let firstCharacter = random + 1
    //  console.log(firstCharacter)
    let i = characters[firstCharacter] 
    return i
  }
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

 
 output.textContent = password

  
 console.log(document.getElementById("myElement"));
 



