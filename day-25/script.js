// For Loop Reverse

// 10 - 1, 1
for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log(`-----------------`);

// 750 - 350, 5
for (let i = 750; i > 350; i -= 5) {
  console.log(i);
}

console.log(`-----------------`);

// 50 - 10, 2
for (let i = 50; i > 9; i -= 2) {
  console.log(i);
}

console.log(`-----------------`);

// 30 - 11, 5
for (let i = 30; i > 10; i -= 5) {
  console.log(i);
}

console.log(`-----------------`);

// Arrays with For Loops

const fruits = ["apple", "mango", "cherry", "grapes", "pineapple"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

console.log(`-----------------`);

const numbers = [2, 3, 4, 5, 6, 7, 8];

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

console.log(`-----------------`);

const nums = [10, 20, 30, 40, 50, 60];

for (let i = nums.length - 2; i >= 0; i -= 10) {
  console.log(nums[i]);
}

console.log(`-----------------`);

for (let i = 10; i > 1; i -= 5) {
  console.log(i);
}

console.log(`-----------------`);

let numbrs = [1, 2, 3, 4, 5, 6];

for (let i = 10; i > 1; i -= 5) {
  console.log(numbrs[i]); // undefined and 6
}
