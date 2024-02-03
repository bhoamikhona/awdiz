"use strict";

/***********************************************************************/
/***************************** QUESTION 01 *****************************/
/***********************************************************************/
console.log(
  "/***************************** QUESTION 01 *****************************/"
);
/**
 * Question 01:
 *
 * Have the function SimpleAdding(num) add up all the numbers from 1 to
 * num. For example: if the input is 4 then your program should return 10
 * because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will
 * be any number from 1 to 1000
 */

const simpleAdding = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

console.log(simpleAdding(4));

/***********************************************************************/
/***************************** QUESTION 02 *****************************/
/***********************************************************************/
console.log(
  "/***************************** QUESTION 02 *****************************/"
);

/**
 * Question 02:
 *
 * Print * pattern
 */

const printPattern = function (num) {
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i));
  }
};

printPattern(5);

/***********************************************************************/
/***************************** QUESTION 08 *****************************/
/***********************************************************************/
console.log(
  "/***************************** QUESTION 08 *****************************/"
);

/**
 * Question 08
 *
 * Draw this pattern using while loop:
 **
 *
 **
 *
 */

let num = 4;

while (num > 0) {
  if (num % 2 === 0) {
    console.log("**");
  } else {
    console.log("*");
  }
  num--;
}

/***********************************************************************/
/***************************** QUESTION 09 *****************************/
/***********************************************************************/
console.log(
  "/***************************** QUESTION 09 *****************************/"
);

/* 
 Print 1 to 10 number sequencely using while loop-
  1234
  123
  12
  1
 */

const printSequence = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str = str + i;
    console.log(str);
  }
};

printSequence(5);

/***********************************************************************/
/***************************** QUESTION 10 *****************************/
/***********************************************************************/
console.log(
  "/***************************** QUESTION 10 *****************************/"
);

/* 
Int arr[]={14,0,76,0,45,0,9,4,0,5}
shift all zeroes at the last 
Without changing index number of other elements
 */
