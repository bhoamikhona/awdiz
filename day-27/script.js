/**
 * Q1. Find out index of 3 numbers whose addition is equal to  target.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 12;

// Answer: [2, 3, 4]

for (let i = 0; i < numbers.length - 2; i++) {
  for (let j = i + 1; j < numbers.length - 1; j++) {
    for (let k = j + 1; k < numbers.length; k++) {
      if (numbers[i] + numbers[j] + numbers[k] === target) {
        // console.log(i, j, k);
        console.log(numbers[i], numbers[j], numbers[k]);
      }
    }
  }
}

console.log(`-----`);

///// FUNCTIONS /////

/*
Function Syntax:

function functionName (parameters) {
  code block
}
*/

function greet() {
  console.log(`hello from inside function`);
}

greet();

console.log(`-----`);

function even() {
  console.log(`Number is even`);
}

function odd() {
  console.log(`Number is odd`);
}

const num = 8232;
if (num % 2 === 0) {
  even();
} else {
  odd();
}
