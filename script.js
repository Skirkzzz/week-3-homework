// Assignment Code
var generateBtn = document.querySelector("#generate");

// create an array of letters
var ucChars = ["A", "B", "C"];
var lcChars = ["a", "b", "c"];
var numberChars = ["1", "2", "3"];
var specialChars = ["%", "&", "^"];

var hasUpper = true;
var hasLower = false;
var hasNumber = true;
var hasSpecial = true;
var passwordLength = 12;

// create a master array of possible characters

if (hasLower) {
  masterArray.concat(lcChars);
}

if (hasUpper) {
  masterArray.concat(ucChars);
}

if (hasUpper) {
  masterArray.concat(numberChars);
}

if (hasUpper) {
  masterArray.concat(specialChars);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var newPassword = "";

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * masterArray.length);
  newPassword += masterArray[randomIndex];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
