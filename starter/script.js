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
var completed = false;
var lowerC;
var upperC;
var numer; //will store the answer linked user choise regarding numbers
var charact;
window.alert("Welcome to password generator");

// Function to prompt user for password options
function getPasswordOptions() {
  //variable will store the true or false answer of user when choosing type of letters, characters etc.
  var prom; //declared var to store the answer from user
  do {
    //Used do while loop for first to check the imput from customer and if is false to stop the loop if not, use will get prompts comments to choose the right password length
    prom = prompt(
      "Choose the length of your passwords, it must be at least 8 characters short and less than 128 characters long"
    );
    if (prom < 8) {
      //will execute if is true
      alert("The password is less than 8 characters");
    } else if (prom > 128) {
      //will execute if is true
      alert("Password is greater than 128 characters");
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

      alert("Great Choice");
      completed = true;
    }
  } while (!completed && (prom < 8 || prom > 128)); //will stop if this is false, will continue if is true till will be false
  return prom;
}
prom = getPasswordOptions();
console.log(lowerC);
console.log(upperC);
console.log(numer);
console.log(charact);

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
