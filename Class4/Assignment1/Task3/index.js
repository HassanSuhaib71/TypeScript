"use strict";
let fruits = ["apple", "gava", "Grapes", "Banana"];
console.log("Taken array. ");
for (let i = 0; i <= 3; i++) {
    console.log(fruits[i]);
}
console.log("*********************************************");
console.log("*** Scenario 1- Modify Array with Methods ***");
console.log("*********************************************");
console.log("************** POP *************");
//here We pop Bnanana from Array
fruits.pop();
for (let i = 0; i <= 3; i++) {
    console.log(fruits[i]);
}
console.log("************** PUSH *************");
//Here We push Water Melon to Array
fruits.push("Water Melon");
for (let i = 0; i <= 3; i++) {
    console.log(fruits[i]);
}
console.log("************** SHIFT *************");
//Here We remove apple by shift function
fruits.shift();
for (let i = 0; i <= 3; i++) {
    console.log(fruits[i]);
}
console.log("************** UNSHIFT *************");
//Here We Add Kiwi by Unshift function
fruits.unshift("Kiwi");
for (let i = 0; i <= 3; i++) {
    console.log(fruits[i]);
}
console.log("************************************");
console.log("*** Scenario 2-Subarray Creation ***");
console.log("************************************");
console.log("************* SPLICE *************");
//Here We Use Splice
let arrayOfNumbers = ["0", "1", "2", "3", "4"];
let subarray = arrayOfNumbers.splice(1, 3);
for (let i = 0; i <= 3; i++) {
    console.log(subarray[i]);
}
console.log("************* SLICE *************");
//Here We use Slice
let arrayOfCity = ["Mardan", "Peshawar", "Islamabad", "Swat", "Kumrat"];
let citrus = arrayOfCity.slice(3);
for (let i = 0; i <= 3; i++) {
    console.log(citrus[i]);
}
