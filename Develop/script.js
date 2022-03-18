// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button

// Creating array for lower case letters
let letters = [
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

// Creating arry for upper case letters
let lettersupper = [
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
// Creating array for numbers
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Creating array for characters
let characters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  "/",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
];

// Creating the array for each link
let lettersNumbersCharacters = [letters, numbers, characters];
let lettersNumbers = [letters, numbers];
let lettersCharacters = [letters, characters];
let numbersCharacters = [numbers, characters];

// Generating random number with a parameter of numb
function randomNumber(numb) {
  return Math.floor(Math.random() * numb);
}

// function for generating password for each case
function generatePassword() {
  let lettersAlert = prompt("Would you like letters? 'Y|N'");
  let numberAlerts = prompt("Would you like Numbers? 'Y|N'");
  let characterAlerts = prompt("Would you like characters? 'Y|N'");
  let lengths = prompt(
    "How long would you like the password to be '8-128 characters long' ?"
  );
  let password = [];
  if (lettersAlert === "Y" && numberAlerts === "Y" && characterAlerts === "Y") {
    for (let i = 0; i < lengths; i++) {
      let randNumb = randomNumber(3);
      let which = lettersNumbersCharacters[randNumb];
      let ranNumb2 = randomNumber(which.length);
      password.push(which[ranNumb2]);
      let passwordno = password.join("");
      console.log(passwordno);
    }
  } else if (lettersAlert === "Y" && numberAlerts === "Y") {
    for (let i = 0; i < lengths; i++) {
      let randNumb = randomNumber(2);
      let which = lettersNumbers[randNumb];
      let ranNumb2 = randomNumber(which.length);
      password.push(which[ranNumb2]);
      let passwordno = password.join("");
      console.log(passwordno);
    }
  } else if (lettersAlert === "Y" && characterAlerts === "Y") {
    for (let i = 0; i < lengths; i++) {
      let randNumb = randomNumber(2);
      let which = lettersCharacters[randNumb];
      let ranNumb2 = randomNumber(which.length);
      password.push(which[ranNumb2]);
      let passwordno = password.join("");
      console.log(passwordno);
    }
  } else if (lettersAlert === "Y") {
    for (let i = 0; i < lengths; i++) {
      let randNumb = randomNumber(letters.length);
      password.push(letters[randNumb]);
      let passwordno = password.join("");
      console.log(passwordno);
    }
  } else if (numberAlerts === "Y") {
    for (let i = 0; i < lengths; i++) {
      let randNumb = randomNumber(numbers.length);
      password.push(numbers[randNumb]);
      let passwordno = password.join("");
      console.log(passwordno);
    }
  } else if (characterAlerts === "Y") {
    for (let i = 0; i < lengths; i++) {
      let randNumb = randomNumber(characters.length);
      password.push(characters[randNumb]);
      let passwordno = password.join("");
      console.log(passwordno);
    }
  }
  let passwordNew = password.join("");
  return passwordNew;
}
// Call for the function that basically does everything
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

// if (lettersAlert === "Y" && numberAlerts === "Y" && characterAlerts === "Y") {
//   for (let i = 0; i < lengths; i++) {
//     let randNumb = randomNumber(3);
//     let which = lettersNumbersCharacters[randNumb];
//     let ranNumb2 = randomNumber(which.length);
//     password.push(which[ranNumb2]);
//     let passwordno = password.join("");
//     console.log(passwordno);
//   }
// } else if (lettersAlert === "Y" && numberAlerts === "Y") {
//   for (let i = 0; i < lengths; i++) {
//     let randNumb = randomNumber(2);
//     let which = lettersNumbers[randNumb];
//     let ranNumb2 = randomNumber(which.length);
//     password.push(which[ranNumb2]);
//     let passwordno = password.join("");
//     console.log(passwordno);
//   }
// } else if (lettersAlert === "Y" && characterAlerts === "Y") {
//   for (let i = 0; i < lengths; i++) {
//     let randNumb = randomNumber(2);
//     let which = lettersCharacters[randNumb];
//     let ranNumb2 = randomNumber(which.length);
//     password.push(which[ranNumb2]);
//     let passwordno = password.join("");
//     console.log(passwordno);
//   }
// } else if (lettersAlert === "Y") {
//   for (let i = 0; i < lengths; i++) {
//     let randNumb = randomNumber(letters.length);
//     password.push(letters[randNumb]);
//     let passwordno = password.join("");
//     console.log(passwordno);
//   }
// } else if (numberAlerts === "Y") {
//   for (let i = 0; i < lengths; i++) {
//     let randNumb = randomNumber(numbers.length);
//     password.push(numbers[randNumb]);
//     let passwordno = password.join("");
//     console.log(passwordno);
//   }
// } else if (characterAlerts === "Y") {
//   for (let i = 0; i < lengths; i++) {
//     let randNumb = randomNumber(characters.length);
//     password.push(characters[randNumb]);
//     let passwordno = password.join("");
//     console.log(passwordno);
//   }
// }

// if(lettersAlert == "Y" && numberAlerts == "Y" && characterAlerts == "Y"){
//   for(let i = 0; i<lengths; i++){
//     let randNumb = randomNumber(3)
//     let which = lettersNumbersCharacters[randNumb]
//     let ranNumb2 = randomNumber([lettersNumbersCharacters[randNumb].length])
//     password.push(which[ranNumb2])
//     let passwordno = password.join("")
//     console.log(passwordno)
//   }
// } else if(lettersAlert = "Y" && numberAlerts == "Y"){
//     for(let i = 0; i<lengths; i++){
//       let randNumb = randomNumber(2)
//       let which = lettersNumbers[randNumb]
//       let ranNumb2 = randomNumber([lettersNumbers[randNumb].length])
//       password.push(which[ranNumb2])
//       console.log(password)
//   }
// } else if(lettersAlert = "Y" && characterAlerts == "Y"){
//     for(let i = 0; i<lengths; i++){
//       let randNumb = randomNumber(2)
//       let which = lettersCharacters[randNumb]
//       let ranNumb2 = randomNumber([lettersCharacters[randNumb].length])
//       password.push(which[ranNumb2])
//       console.log(password)
//     }
//   }

// } else if(lettersAlert == "Y" && characterAlerts == "Y"){
//     for(let i = 0; i<lengths; i++){
//       let randNumb = randomNumber(2)
//       let which = lettersCharacters[randNumb]
//       let ranNumb2 = randomNumber([lettersCharacters[randNumb].length])
//       password.push(which[ranNumb2])
//       console.log(password)
//   }
// } else if(lettersAlert=="Y"){
//     for(let i = 0; i<lengths; i++){
//       let randNumb = randomNumber(letters.length)
//       password.push(letters[randNumb])
//       console.log(password)
//   }

// let val1 = "n";
// let val2 = "y";

// if(val1===val2){
//   console.log("3")

// }
// if(val1==val2){
//   console.log("2")
// }
// if(val1=val2){
//   console.log("1")
// }

// let lettersAlertlower = lettersAlert.toLowerCase();
// console.log(lettersAlertlower)

// if(lettersAlertlower == 'yes'){
//   let upper = prompt("Would you like upper case letters?");
// }
// for(let i = 0; i<5; i++){
//   console.log(randomNumber(3) + " "+lettersNumbersCharacters[randomNumber(3)])
// }
