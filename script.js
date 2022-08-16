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
      // If password isn't between 8 and 128 characters it will prompt a error
     } else if (length < 8 || length > 128) {
      window.prompt ("Error! Please enter a number between 8 and 128")
    }

    // Log to make sure it logs a number
    console.log(length)

  // Window promt to choose if numbers should be included in the password
  var numbers = window.prompt("Do you want numbers in your password? Please type yes or no");
    // If user types yes or no, it will take it to the next prompt window
   if (numbers === "yes") {
    window.confirm ("Ok! Onto the next!")
    // If user types yes, numbers will be added to the password
    newPassword += numeric;
   } else if (numbers === "no") {
   window.confirm ("Ok! Onto the next!")
   // If user types anything besides yes or no it will ask again
   } else {
    window.prompt ("Please type yes or no")
   }

  // Window promt to choose if special characters should be included in the password
  var specialCharacters = window.prompt("Do you want special characters in your password? Please type yes or no");
   // If user types yes or no, it will take it to the next prompt window
   if (specialCharacters === "yes") {
    window.confirm ("Ok! Onto the next!")
    // If user types yes, special characters will be added to the password
    newPassword += characters
   } else if (specialCharacters === "no") {
   window.confirm ("Ok! Onto the next!")
   // If user types anything besides yes or no it will ask again
  } else {
    window.prompt ("Please type yes or no")
    return;
  }

  // Window promt to choose if upper case characterss should be included in the password
  var upperCase = window.prompt("Do you want uppercase characters in your password? Please type yes or no");
  // If user types yes or no, it will take it to the next prompt window
    if (upperCase === "yes") {
    window.confirm ("Ok! Onto the next!")
    // If user types yes, uppercase characters will be added to the password
    newPassword += upper
    } else if (upperCase === "no") {
    window.confirm ("Ok! Onto the next!")
    // If user types anything besides yes or no it will ask again
    } else {
    window.prompt ("Please type yes or no")
    return;
  }
  
  // Window promt to choose if lower case characterss should be included in the password
  var lowerCase = window.prompt("Do you want lowercase characters in your password? ");
  // If user types yes or no, it will take it to the next prompt window
  if (lowerCase === "yes") {
    window.confirm ("Ok! Ready to generate your password!")
    // If user types yes, lowercase characters will be added to the password
    newPassword += lower
   } else if (lowerCase === "no") {
   window.confirm ("Ok! Ready to generate your password!")
   // If user types anything besides yes or no it will ask again
  } else {
    window.prompt ("Please type yes or no")
    return;
  }

  // Loop in order to choose charactrs given the specified length. NOT WORKING
  for(var i = 0; i < length; i++ ) {
    newPassword[Math.floor(Math.random() * newPassword.length)]
  }

  // Variable for the new password to show up in the password area
var passwordText = document.querySelector("#password");
passwordText.value = (newPassword);

}

// Declaring writePassword function
writePassword();

// Log to make sure new passwords are being created 
console.log(newPassword)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


