var generateBtn = document.querySelector("#generate");

var lower = ["qwertyuiopasdfghjklzxcvbnm"]
var upper= ["QWERTYUIOPASDFGHJKLZXCVBNM"]
var numeric = 1234567890
var characters = ["!@#$%^&*()"]
var newPassword = ("")

function createPassword (){
  var length = window.prompt("Choose length of your password");
    if (length >= 8 && length <= 128) {
      window.confirm ("Ok! Onto the next!")
     } else if (length < 8 || length > 128) {
      window.prompt ("Error! Please enter a number between 8 and 128")
    }

  var numbers = window.prompt("Do you want numbers in your password? Please type yes or no");
   if (numbers === "yes") {
    window.confirm ("Ok! Onto the next!")
    newPassword += numeric;
   } else if (numbers === "no") {
   window.confirm ("Ok! Onto the next!")
   } else {
    window.prompt ("Please type yes or no")
   }

  var specialCharacters = window.prompt("Do you want special characters in your password? Please type yes or no");
   if (specialCharacters === "yes") {
    window.confirm ("Ok! Onto the next!")
    newPassword += characters
   } else if (specialCharacters === "no") {
   window.confirm ("Ok! Onto the next!")
  } else {
    window.prompt ("Please type yes or no")
    return;
  }

  var upperCase = window.prompt("Do you want uppercase characters in your password? Please type yes or no");
    if (upperCase === "yes") {
    window.confirm ("Ok! Onto the next!")
    newPassword += upper
    } else if (upperCase === "no") {
    window.confirm ("Ok! Onto the next!")
    } else {
    window.prompt ("Please type yes or no")
    return;
  }
  var lowerCase = window.prompt("Do you want lowercase characters in your password? Please type yes or no");
  if (lowerCase === "yes") {
    window.confirm ("Ok! Onto the next!")
    newPassword += lower
   } else if (lowerCase === "no") {
   window.confirm ("Ok! Ready to generate your password!")
  } else {
    window.prompt ("Please type yes or no")
    return;
  }

}

createPassword();

console.log(newPassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


