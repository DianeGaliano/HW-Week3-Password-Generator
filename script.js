// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

}
function writePassword(); {
const password = "abcefghijklmnopqrstuvwxyz"

return password[Math.floor(Math.random() * alphabet.lenghth)]
}
console.log(writePassword())

function writePassword(); {
  const password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return password[Math.floor(Math.random() *alphabet.length)]
}

function generatePassword(event) {
  event.preventDefault();
  console.log(event);
  var passwordText = "How many characters does your password need?" + 
}