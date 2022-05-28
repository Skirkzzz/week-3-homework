// Assignment Code
var generateBtn = document.querySelector("#generate");

// create an array of letters
var ucChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lcChars = "abcdefghijklmnopqrstuvwxyz".split("");
var numberChars = "123456789".split("");
var specialChars = "!£$%^&*()@~:;,./?{}=-_".split("");

var hasUpper = true;
var hasLower = false;
var hasNumber = true;
var hasSpecial = true;
var passwordLength = 12;

// create a master array of possible characters
function generatePassword() {
  var masterArray = [];
  var passwordLength = prompt(
    "How many characters would you like your password to be?"
  );

  var hasLower = confirm("Do you want lowercase letters?");
  if (hasLower) {
    masterArray = masterArray.concat(lcChars);
  }

  var hasUpper = confirm("Do you want uppercase letters?");
  if (hasUpper) {
    masterArray = masterArray.concat(ucChars);
  }
  var hasNumbers = confirm("Do you want numbers?");
  if (hasNumbers) {
    masterArray = masterArray.concat(numberChars);
  }
  var hasSpecial = confirm("Do you want special character?");
  if (hasSpecial) {
    masterArray = masterArray.concat(specialChars);
  }
  //code to create password and iterate through the logic
  var newPassword = "";
  console.log(masterArray);
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * masterArray.length);
    newPassword += masterArray[randomIndex];
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
