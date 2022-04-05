// create an array of letters
var ucChars = ['A', 'B', 'C'];
var lcChars = ['a', 'b', 'c'];
var numberChars = ['1', '2', '3'];
var specialChars = ['%', '&', '^'];


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

var newPassword = "";

for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * masterArray.length)
    newPassword += masterArray[randomIndex]
}