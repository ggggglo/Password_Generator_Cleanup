var generateBtn = document.querySelector("#generate");

var lowerCase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
var upperCase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var numeric = 1; 2; 3; 4; 5; 6; 7; 8; 9; 0;
var characters = '\U+0020'; '\U+0021'; '\U+0022';

function createPassword (){
  var length = window.prompt("Choose length of your password");
    if (length >= 8 && length <= 128) {
      window.confirm ("Ok! Onto the next!")
     } else if (length < 8 || length > 128) {
      window.prompt ("Error! Please enter a number between 8 and 128")
      return;
    } else {
      window.prompt ("Error! Please enter a valid number")
      return;
    }
  
  var numbers = window.prompt("Do you want numbers in your password? Please type yes or no");
   if (numbers = "yes") {
    window.confirm ("Ok! Onto the next!")
   } else if (numbers = "no") {
   window.confirm ("Ok! Onto the next!")
   } else {
    window.prompt ("Please type yes or no")
    return;
   }
  }

  createPassword();

 // var numbers = window.prompt("Do you want numbers in your password?");
  //var select3 = window.prompt("Do you want special characters in your password?");
  //var select4 = window.prompt("Do you want uppercase charactres in your password?");
 // var select5 = window.prompt("Do you want lowercase characters in your password?");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

