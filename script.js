// Selecting the generate id in the HTML
var generateBtn = document.querySelector("#generate");

// Variables that will define the characters in the password
var lower = ["qwertyuiopasdfghjklzxcvbnm"]
var upper= ["QWERTYUIOPASDFGHJKLZXCVBNM"]
var numeric = 1234567890
var characters = ["!@#$%^&*()"]

// Variable in which the new password will be held
var newPassword = ("")

// Function that will create the new password
function writePassword (){
  // Window promt to choose the length of the password
  var length = window.prompt("Choose length of your password");
    // Password has to be between 8 and 128 characters
    if (length >= 8 && length <= 128) {
      window.confirm ("Ok! Onto the next!")
     } else if (length < 8 || length > 128) {
      window.prompt ("Error! Please enter a number between 8 and 128")
    }

    // Log to make sure it logs a number
    console.log(length)

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
  
  var lowerCase = window.prompt("Do you want lowercase characters in your password? ");
  if (lowerCase === "yes") {
    window.confirm ("Ok! Ready to generate your password!")
    newPassword += lower
   } else if (lowerCase === "no") {
   window.confirm ("Ok! Ready to generate your password!")
  } else {
    window.prompt ("Please type yes or no")
    return;
  }

  for(var i = 0; i < length; i++ ) {
    newPassword[Math.floor(Math.random() * newPassword.length)]
  }

var passwordText = document.querySelector("#password");
passwordText.value = (newPassword);

}

writePassword();
console.log(newPassword)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


