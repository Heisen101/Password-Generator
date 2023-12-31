// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerC;
var upperC;
var numer; //will store the answer linked user choise regarding numbers
var charact;
window.alert("Welcome to password generator");

// Function to prompt user for password options
function getPasswordOptions() {
  var atLeastOneOption = false; //this variable will store the answer for at least one user option from promt messages
  //variable will store the true or false answer of user when choosing type of letters, characters etc.
  var prom; //declared var to store the answer from user
  do {
    //Used do while loop for first to check the imput from customer and if is false to stop the loop if not, user will get prompts comments to choose the right password length
    prom = prompt(
      "Choose the length of your passwords, it must be at least 8 characters short and less than 128 characters long"
    );
    if (isNaN(prom)) {
      //if user inserta a letter or other then a number, this will alert him to insert the righ format
      alert("Please insert a valid number:");
    } else if (prom < 8) {
      //will execute if is true
      alert("The password is less than 8 characters");
    } else if (prom > 128) {
      //will execute if is true
      alert("Password is greater than 129 characters");
    } else {
      charact = window.confirm(
        "Click OK to confirm including special characters"
      );
      numer = window.confirm(
        "Click OK to confirm including numeric characters"
      );
      lowerC = window.confirm(
        "Click OK to confirm including lowercase characters"
      );
      upperC = window.confirm(
        "Click OK to confirm including uppercase characters"
      );
      if (charact || numer || lowerC || upperC) {
        //this will make user to choose at least one option, will get promts until has choosed an option
        atLeastOneOption = true; //if the above condition is true than this variable is true and will execute the alert
        alert("Great Choice");
      } else {
        alert("You must select atleast one option");
      }
    }
  } while (!atLeastOneOption || prom < 8 || prom > 128); //will stop if this is false, will continue if is true till will be false

  return prom;
}
prom = getPasswordOptions();

// Function to generate password with user input
function generatePassword(prom) {
  var allowedC = ""; //store variable for new string that will be genrated on user preference
  if (charact) allowedC += specialCharacters.join(""); //transformed to a string and concat to new generated string if anser is true

  if (lowerC) allowedC += lowerCasedCharacters.join(""); //transformed to a string and concat to new generated string if anser is true
  if (numer) allowedC += numericCharacters.join("");
  if (upperC) allowedC += upperCasedCharacters.join("");
  var password = ""; // variable that will store the passwords
  for (let i = 0; i < prom; i++) {
    //using loop for generating password that would be equal with the user input, which in our case is prom
    randomC = Math.floor(Math.random() * allowedC.length); //math.floor will take the number to the base number as from 2.9 will make it 2, and math random will generate a number between 0 and 0.99,
    password += allowedC[randomC];
  }
  return password;
}

var generatedPassword = generatePassword(prom); //generatedPassword will be equall to the result of generatePassword function and wiil store the result, and will be able to display in console
console.log(generatedPassword);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(prom);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
writePassword(); //will display the password once the last promt is answered
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
