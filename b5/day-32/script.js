////////// var //////////
var firstName = "Bhoami";

// re-assigning var variable
firstName = "Khona";

// re-declaring var variable
var firstName = "Bhoami";

////////// let //////////
let fName = "Bhoami";

// re-assigning let variable
fName = "Khona";

// re-declaring let variable
// let fName = "Bhoami"; // error - cannot re-declare let variable

////////// const variable //////////
const firstN = "Bhoami";

// re-assigning const variable
// firstN = "Khona"; // error - cannot re-assign const variable

// re-declaring const variable
// const firstN = "Bhoami"; // error - cannot re-declare const variable

// Hoisting  - only works for var varibles and traditional functions

console.log(myAge); // Able to access a variable which is declared after this line of code due to hoisting.
var myAge = 27;

// Able to access a function which is declared after this line of code due to hoisting.
add(2 + 3);

function add(a, b) {
  console.log(2 + 3);
}

// Traditional Function
function myAge() {
  console.log(20);
}

myAge();

// Arrow Function
const addition = (a) => console.log(a + a);
addition(2);
