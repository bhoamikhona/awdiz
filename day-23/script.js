////// Conditional Statement //////

// if-else statement

/*
Syntax:

if (condition) {
  true statement
} else {
  false statement
}

*/

/**
 * Q1. Find if user's age is greater than 19 or not
 */

var userAge = 24;
// userAge = 10;

if (userAge > 19) {
  console.log(`You are eligible for driver's license.`);
} else {
  console.log(`Sorry, try again in a few years.`);
}

/**
 * Q2. Find if user's age is greater than 19 and lesser than 90 or not.
 */

userAge = 24;
userAge = 15;
userAge = 95;

if (userAge > 19 && userAge < 90) {
  console.log(`Your age is greater than 19 and lesser than 90.`);
} else {
  console.log(`Your age might be lesser than 19 or greater than 90.`);
}

/**
 * Q3. If user's age is greater than 19 and lesser than 90 then print
 * "You are eligible for Driver's License". If user's age is lesser than
 * 19 then print "You are under-aged". If user's age is equal to 19 then
 * print "You are eligible for Learner's Permit". If user's age is
 * greater than 90 then return "You are over-aged".
 */

userAge = 24;
userAge = 19;
userAge = 15;
userAge = 95;

if (userAge > 19 && userAge < 90) {
  console.log(`You are eligible for Driver's License`);
} else if (userAge === 19) {
  console.log(`You are eligible for Learner's Permit`);
} else if (userAge < 19) {
  console.log(`You are under-aged`);
} else {
  console.log(`You are over-aged`);
}

// switch statement

/*
Syntax:

switch (variable) {
  case value1:
    code
    break;
  case value2:
    code
    break;
  case value3:
    code
    break;
  default:
    code
    break;
}

*/

var material = `plastic`;
material = `carbon fiber`;
material = `steel`;

switch (material) {
  case `steel`:
    console.log(`Material is steel`);
    break;
  case `copper`:
    console.log(`Material is copper`);
    break;
  case `plastic`:
    console.log(`Material is plastic`);
    break;
  default:
    console.log(`Material is not defined`);
    break;
}

// Undefined variable
var firstName;
console.log(firstName); // undefined
console.log(typeof firstName); // undefined

////// Array //////

/*
Syntax:

var arrayName = [value1, value2, value3,...];
*/

var myData = [`Bhoami K Khona`, 27, true];

// Nested Array
var fruits = [`apple`, `cherry`];
var vegetables = [`Peas`, `Capsicum`];
var fruitsAndVegetables = [
  [`apple`, `cherry`],
  [`Peas`, `Capsicum`],
];

console.log(fruits);
console.log(vegetables);
console.log(fruitsAndVegetables);

// Accessing array elements
console.log(myData[0]);
console.log(myData[1]);
console.log(myData[2]);

// array length
console.log(myData.length);

// adding new elements to an array
var students = [`abc`, `xyz`];
console.log(students);

students.push(`pqr`);
console.log(students);

// removes the last element from the array
var alphabets = [`a`, `b`, `c`, `d`, `e`, `f`, `g`];
console.log(alphabets);

alphabets.pop();
console.log(alphabets);
