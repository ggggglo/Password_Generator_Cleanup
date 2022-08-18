// Selecting the generate id in the HTML
var generateBtn = document.querySelector("#generate");

// Function that will create the new password
function writePassword (){

// Variables that will define the characters in the password
var specs = {
  lower: "qwertyuiopasdfghjklzxcvbnm",
  upper: "QWERTYUIOPASDFGHJKLZXCVBNM",
  numeric: "1234567890",
  characters: "~!@#$%^&*()_+"
};

  // Window promt to choose the length of the password
  var passwordLength = window.prompt("Choose length of your password");
    // Password has to be between 8 and 128 characters
    if (passwordLength >= 8 && passwordLength <= 128) {
      window.confirm ("Ok! Onto the next!")
      // If password isn't between 8 and 128 characters it will prompt a error
     } else if (passwordLength < 8 || passwordLength > 128) {
      window.prompt ("Error! Please enter a number between 8 and 128")
      return null;
    } else {
      window.prompt ("Error! Please enter a number between 8 and 128")
      return null;
    }

    // Log to make sure it logs a number
    console.log(passwordLength)

    // Variable in which the new password will be held
    var newPassword = "";
    var genPassword = "";


  // Window promt to choose if numbers should be included in the password
  var numbers = window.prompt("Do you want numbers in your password? Please type yes or no");
    // If user types yes or no, it will take it to the next prompt window
   if (numbers === "yes") {
    // If user types yes, numbers will be added to the password
    newPassword += specs.numeric;
    window.confirm ("Ok! Onto the next!");
   } else if (numbers === "no") {
   window.confirm ("Ok! Onto the next!");
   // If user types anything besides yes or no it will ask again
   } else {
    window.prompt ("Please type yes or no");
   }

  // Window promt to choose if special characters should be included in the password
  var specialCharacters = window.prompt("Do you want special characters in your password? Please type yes or no");
   // If user types yes or no, it will take it to the next prompt window
   if (specialCharacters === "yes") {
     // If user types yes, special characters will be added to the password
     newPassword += specs.characters;
    window.confirm ("Ok! Onto the next!");
   } else if (specialCharacters === "no") {
   window.confirm ("Ok! Onto the next!");
   // If user types anything besides yes or no it will ask again
  } else {
    window.prompt ("Please type yes or no");
    return;
  }

  // Window promt to choose if upper case characterss should be included in the password
  var upperCase = window.prompt("Do you want uppercase characters in your password? Please type yes or no");
  // If user types yes or no, it will take it to the next prompt window
    if (upperCase === "yes") {
      // If user types yes, uppercase characters will be added to the password
    newPassword += specs.upper;
    window.confirm ("Ok! Onto the next!");
    } else if (upperCase === "no") {
    window.confirm ("Ok! Onto the next!");
    // If user types anything besides yes or no it will ask again
    } else {
    window.prompt ("Please type yes or no");
    return;
  }
  
  // Window promt to choose if lower case characterss should be included in the password
  var lowerCase = window.prompt("Do you want lowercase characters in your password? ");
  // If user types yes or no, it will take it to the next prompt window
  if (lowerCase === "yes") {
    // If user types yes, lowercase characters will be added to the password
    newPassword += specs.lower;
    window.confirm ("Ok! Ready to generate your password!");
   } else if (lowerCase === "no") {
   window.confirm ("Ok! Ready to generate your password!");
   // If user types anything besides yes or no it will ask again
  } else {
    window.prompt ("Please type yes or no");
    return;
  }

  // Loop in order to choose charactrs given the specified length. NOT WORKING

  for(let i = 0; i < passwordLength; i++ ) {
    genPassword += newPassword[Math.floor(Math.random() * genPassword.length)]
  }
  return newPassword;

  }

  // Variable selecting where in the HTML to input the final password

  var passwordText = document.querySelector("#password");
  passwordText.value = writePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


