var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

///// Array methods /////

// Shift - removes the first element of an array
numbers.shift();
console.log(numbers);

// Unshift - adds an element at the beginning of an array
numbers.unshift(24, 42);
console.log(numbers);

///// Loops /////
// For Loop

/**
 * Q1. Print numbers between 1 to 10
 */
for (var i = 1; i < 11; i++) {
  console.log(i);
}

for (var i = 40; i < 100; i += 10) {
  console.log(i);
}
