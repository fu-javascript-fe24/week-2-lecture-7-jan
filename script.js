'use strict';

console.log("Hello World from JS-file");

let msg = "Hello World from variable";
console.log(msg);

let firstName = 'Jesper';
let lastName = 'Nyberg';

// Strängkonkatenering
console.log(firstName + ' ' + lastName);
// Console.log-lösning, kommatecken skapar automatiskt mellanrum
console.log(firstName, lastName);

// Med dubbelfnuttar kan man inte skriva "smeknamn" (mer dubbelfnuttar) inuti texten
// Med enkelfnuttar så funkar det dock!
let nickname = 'SankaCoffee';
let movie = 'Cool Runnings';

console.log('Mitt första nick på Lunarstorm var "' + nickname + '" efter att ha sett filmen Cool Runnings');
console.log(`Mitt första nick på Lunarstorm var "${nickname}" efter att ha sett filmen ${movie}`);

// Datatyper
let myName = 'Jesper'; // String
let age = 33; // Number
let isCool = false; // Boolean

console.log(typeof myName, typeof age, typeof isCool);

let first = 'one'; // Dynamisk variabel
const second = 'two'; // Konstant variabel, kan ej ändras
var third = 'three'; // Dynamisk variabel, använd ej!

first = 'four';
// second = 'five'; // Denna rad får programmet att krascha
// console.log(second);
console.log(first);

// Namnge variabler
// let 12345 = 'hej'; // Får inte börja med en siffra!
let a = 'Jesper'; // Bad practice
let b = 33; // Bad practice

// Ge förklarande namn! camelCase!
let nicknamePlayerOne = 'SankaCoffee';
let playerOneScore = 100;
let isGameOver = false;

// Aritmetiska operatorer (+, -, *, /, %)
let y = 10;
let x = 5;

console.log(y + x);
console.log(y - x);
console.log(y * x);
console.log(y / x);
console.log(y % x);

// Selektioner
let number = 5;

// Här kollar vi strikt likhet och får true
if(number === 5) {
    console.log('Number is equal to 5');
}

// Här kollar vi strikt likhet och får false
if(number === '5') {
    console.log('Number is equal to 5');
} else {
    console.log('Number is not equal to 5');
    
}

if(number === 6) {
    console.log('Number is equal to 6');
} else if(number < 6) {
    console.log('Number is less than 6');
} else {
    console.log('Number is larger than 6');
}

// När vi använder && måste båda uttrycken vara sanna
if(number === 5 && typeof number === 'number') {
    console.log('True');
}

// När vi använder || måste ett av uttrycken vara sanna
if(number === 5 || typeof number === 'string') {
    console.log('True');
}

// Switch-satsen
let operator = 'hej';
switch(operator) {
    case '+':
        console.log(x + y);
        break;
    case '-':
        console.log(x - y);
        break;
    case '*':
        console.log(x * y);
        break;
    case '/':
        console.log(x / y);
        break;
    default:
        console.log('No valid operator');        
}

// Loopar
// For-loopen
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// While-loop // Istället för att göra såhär, använd for-loop
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

// While-loopen är mer användbar när vi inte vet hur många gånger loopen skall köras
let run = true;
let lap = 0;

while(run) {
    console.log('Running...');
    lap++;
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    if(randomNumber > 8) {
        run = false;
    }
}

console.log(`You ran ${lap} laps`);

// While för att interagera med användaren
let isInputApproved = false;
while(!isInputApproved) {
    let age = prompt('How old are you?');
    if(age < 18) {
        alert('You are too young!');
    } else {
        isInputApproved = true;
        alert('Welcome to systembolaget!');
    }   
}