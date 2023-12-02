"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input = require("prompt-sync")();
//Scenario 1
console.log("*******************************");
console.log("*** Scenario 1: Sum numbers ***");
console.log("*******************************");
let add = (x, y) => x + y;
console.log(add(3, 4));
console.log("\n ");
console.log("*************************************");
console.log("*** Scenario 2: Check Even or Odd ***");
console.log("*************************************");
function checkEvenOrOdd(n) {
    if (n % 2 == 0) {
        console.log("Entered Number is Even.");
    }
    else {
        console.log("Entered Number is Odd.");
    }
}
let n = 0;
n = input("Enter Number You want to check: ");
console.log(checkEvenOrOdd(n));
console.log("\n ");
console.log("*************************************");
console.log("*** Scenario 3: Calculate Area***");
console.log("*************************************");
function calculateArea(w, l) {
    return w * l;
}
let w = input("Enter Width of Rectangle: ");
let l = input("Enter Width of Rectangle: ");
console.log(calculateArea(w, l));
console.log(" \n ");
console.log("*************************************");
console.log("*** Scenario 4: String Reversal ***");
console.log("*************************************");
function reverseString(inputString) {
    let reverseString = inputString.split("").reverse().join("");
    return reverseString;
}
let inputString = input("Enter String: ");
console.log(reverseString(inputString));
console.log("*************************************");
console.log("*** Scenario 5: Temperature Conversion ***");
console.log("*************************************");
let convertCelsiusToFahrenheit = (t) => {
    return (9 / 5) * t + 32;
};
let t = input("Enter Temperature in celsius: ");
console.log(convertCelsiusToFahrenheit(t));
