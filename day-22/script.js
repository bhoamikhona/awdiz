// Variables
console.log("bhoami"); // bhoami
console.log(typeof "bhoami"); // string
console.log(typeof "1234"); // string
console.log(typeof 1234); // number
console.log("123" + "123"); // 123123
console.log(123 + 123); // 246

function greeting(firstName) {
  return "Hi, " + firstName;
}

greeting("Bhoami");
console.log(greeting("Bhoami")); // Hi, Bhoami

// Boolean
console.log(true);
console.log(typeof true); // boolean
console.log(false);
console.log(typeof false); // boolean

console.log(typeof "false"); // string

// Variables
var firstName = "Bhoami";
console.log(firstName); // Bhoami
console.log(typeof firstName); // String

var studentCount = 20;
console.log(studentCount); // 20
console.log(typeof studentCount); // number

// Arithmetic Operators
var num1 = 50;
var num2 = 100;
console.log(num1, num2); // 50, 100
console.log(num1 + num2); // 150

num1 = 10;
num2 = 20;
console.log(num1 + num2); // 30
console.log(num1 - num2); // -10
console.log(num1 * num2); // 200
console.log(num1 / num2); // 0.5
console.log(num1 % num2); // 10

// Comparison Operators
console.log(2 == 2); // true
console.log(`2` == 2); // true - checks data only
console.log(`2` === 2); // false - checks data and data type (strict comparison)
console.log(`true` == true); // false - because true is a pre-defined word

console.log(2 > 1); // true
console.log(4 < 2); // false
console.log(6 > 6); // false
console.log(6 >= 6); // false
console.log(10 <= 12); // true
console.log(10 <= 10); // true
console.log(10 <= 8); // false

// Logical Operators
var age = 27;
console.log(age); // 27
console.log(age > 19); // true
console.log(age < 90); // true
console.log(age > 19 && age < 90); // true
console.log(age > 19 && age > 90); // false
console.log(age < 19 || age < 90 || age < 25); // true
console.log(age < 19 || age > 90 || age < 25); // false
