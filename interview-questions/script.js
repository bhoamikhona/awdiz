"use strict";

// 01

const isPalindrome = function (str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

console.log(isPalindrome("car"));
console.log(isPalindrome("malayalam"));

// 02
const printNum = function (num) {
  if (num > 0) {
    printNum(num - 1);
    console.log(num);
  }
  return;
};

printNum(5);
printNum(3);

// 03
const arrangeAlpha = function (str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "W") {
      result = "W" + result;
    } else if (str[i] === "B") {
      result = result + "B";
    }
  }
  return result;
};

console.log(arrangeAlpha("WBBWBBBWBB"));

// What will be the result of this and why?
/*
"a" and "b" are both strings, so they are concatenated together to form "ab".

"+" before "c" is interpreted as the unary plus operator, which tries to convert the following operand "c" into a number. However, since "c" is not a valid number, it results in NaN (Not a Number).

The concatenation of "ab" and NaN results in "abNaN".

Finally, "d" is concatenated to the end, resulting in "abNaNd".
*/
console.log("a" + "b" + +"c" + "d");

// which one will give error or not
console.log(a);
var a = 23;

// console.log(a);
// let a = 23;

// console.log(a);
// const a = 23;

// will it run or give error
hii();
function hii() {
  console.log("hello");
}

// hi2();
// const hi2 = function () {
//   console.log(hi);
// };

console.log(console.log("abc"));

console.log(NaN === NaN);

const countAlpha = function (str) {
  let upperCount = 0;
  let lowerCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      upperCount++;
    } else if (str[i] === str[i].toLowerCase()) {
      lowerCount++;
    }
  }

  return [upperCount, lowerCount];
};

console.log(countAlpha("Hello World @$"));

const secondHighest = function (arr) {
  return arr.sort().slice(-2, -1).pop();
};

console.log(secondHighest([3, 1, 4, 5, 6]));

// Q 15
const reverseString = function (str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};

console.log(reverseString("Hello World"));

// Q 16
const multiplicationTable = function (num) {
  for (let i = 1; i < 11; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

multiplicationTable(6);
////////////////////////////
// // Q 01
// function Adding(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(Adding(10));
// console.log(Adding(15));

// // Q 08

// const starPattern = function (num) {
//   while (num > 0) {
//     if (num % 2 === 0) {
//       console.log("**");
//     } else {
//       console.log("*");
//     }
//     num--;
//   }
// };

// starPattern(4);

// // Q 09
// function printPattern() {
//   let num = 4;

//   while (num >= 1) {
//     let number = "";
//     let currentNum = 1;

//     while (currentNum <= num) {
//       number += currentNum;
//       currentNum++;
//     }

//     console.log(number);
//     num--;
//   }
// }
// printPattern();

/////////////////////////////////
