const input = require("prompt-sync")();

//Scenario 1 Describe Sum of Two Number
console.log("*******************************");
console.log("*** Scenario 1: Sum numbers ***");
console.log("*******************************");

let add = (x: number, y: number): number => x + y; //it return sum of to Numbers in arrow function

console.log(add(3, 4));
console.log("\n ");

//Scenario 2 Describe Checking of a number that the Number are Even or Odd
console.log("*************************************");
console.log("*** Scenario 2: Check Even or Odd ***");
console.log("*************************************");

function checkEvenOrOdd(n: number) {
  //this function take a number as a parameter and then check it by if else Condition
  if (n % 2 == 0) {
    console.log("Entered Number is Even.");
  } else {
    console.log("Entered Number is Odd.");
  }
}
//here is the input from the user for Checking a number is even or odd
let n = 0;
n = input("Enter Number You want to check: ");
console.log(checkEvenOrOdd(n));
console.log("\n ");

//Scenario 3 Describe to claculate Area of Rectangle
console.log("*************************************");
console.log("*** Scenario 3: Calculate Area***");
console.log("*************************************");

//this function return multiplication of two number that calculate area of rectangle
function calculateArea(w: number, l: number) {
  return w * l;
}
//here is the input length and width of rectangle from the user
let w = input("Enter Width of Rectangle: ");
let l = input("Enter length of Rectangle: ");
console.log(calculateArea(w, l));

console.log(" \n ");

//Scenario 4 Describe String Reversal
console.log("*************************************");
console.log("*** Scenario 4: String Reversal ***");
console.log("*************************************");
//this function use built-in functions for reversing a string
function reverseString(inputString: string): string {
  let reverseString = inputString.split("").reverse().join("");
  return reverseString;
}
//here is the input string from user
let inputString = input("Enter String: ");

console.log(reverseString(inputString));

//Scenario 5 describe conversion of temperature form celsius To Fahrenheit
console.log("*************************************");
console.log("*** Scenario 5: Temperature Conversion ***");
console.log("*************************************");
//this function return a formula that is for conversion of temperature from celsiues to fahernheit
let convertCelsiusToFahrenheit = (t: number): number => {
  return (9 / 5) * t + 32;
};
//here is the input of temperature in celsius
let t = input("Enter Temperature in celsius: ");
console.log(convertCelsiusToFahrenheit(t));
