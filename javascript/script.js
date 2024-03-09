"use strict";
// /***********************************************************************/
// /***************************** 15 FEB 2024 *****************************/
// /***********************************************************************/
// console.log(
//   `/***************************** 15 FEB 2024 *****************************/`
// );

// // push()
// let array = [1, 2, 3, 5];
// const newIndex = array.push(6);

// console.log(array);
// console.log(newIndex);

// // pop()
// console.log(array.pop());
// console.log(array);

// // unshift()
// array.unshift(5);
// array.unshift(4);
// console.log(array);

// // shift()
// const deletedPosition = array.shift();
// console.log(array);
// console.log(deletedPosition);

// // slice()
// array = ["a", "b", "c", "d", "e"];
// let ans = array.slice(2, 4);
// console.log(ans);

// ans = array.slice(1, 5);
// console.log(ans);

// ans = array.slice(-3);
// console.log(ans);

// ans = array.slice(1, -3);
// console.log(ans);

// // splice()
// array = ["a", "b", "c", "d", "e"];

// array.splice(1, 0, "z");
// console.log(array);

// array.splice(4, 1, "x");
// console.log(array);

// let todos = ["complete assignments", "eat lunch"];
// todos.splice(1, 2);
// console.log(todos);

// /***********************************************************************/
// /***************************** 16 FEB 2024 *****************************/
// /***********************************************************************/
// console.log(
//   `/***************************** 16 FEB 2024 *****************************/`
// );

// // template literals
// let username = "Awdiz";
// let age = 10;
// console.log(`Welcome ${username} and your age is ${age}`);

// // concat()
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let newArray = array1.concat(array2);

// // includes()
// array = [1, 2, 3];
// let isExist = array.includes(4);
// console.log(isExist);

// array = ["cat", "dog"];
// isExist = array.includes("cow");
// console.log(isExist);
// isExist = array.includes("dog");
// console.log(isExist);

// // sort()
// let days = ["mon", "tue", "wed", "thu", "sat"];
// console.log(days.sort());

// let numbers = [1, 3, 5, 2, 4];
// console.log(numbers.sort()); // [1, 2, 3, 4, 5]

// numbers = [1, 3, 5, 200, 4, 2];
// console.log(numbers.sort()); // [1, 2, 200, 3, 4, 5]

// console.log(numbers.sort((a, b) => a - b)); // [1, 2, 3, 4, 5, 200]
// console.log(numbers.sort((a, b) => b - a)); // [200, 5, 4, 3, 2, 1]

// // join()
// let data = ["abc", "xyz", "lmn"];
// console.log(data.join("-")); // abc-xyz-lmn
// console.log(data.join(" ")); // abc xyz lmn
// console.log(data.join("")); // abcxyzlmn
// console.log(data.join()); // abc,xyz,lmn

// // split()
// let string = "Awdiz Institute Vashi";
// console.log(string.split(" ")); // ['Awdiz', 'Institute']
// console.log(string.split(""));
// console.log(string.split("i"));

// // at()
// let nums = [1, 2, 3, 4];
// console.log(nums.at(0)); // 1
// console.log(nums.at(3)); // 4
// console.log(nums.at(4)); // undefined

// /***********************************************************************/
// /***************************** 17 FEB 2024 *****************************/
// /***********************************************************************/
// console.log(
//   `/***************************** 17 FEB 2024 *****************************/`
// );

// function checkIsUserValid() {
//   var age = document.getElementById("age").value;
//   const pTag = document.getElementById("displayResult");
//   // console.log(age, "age")
//   if (age > 18 && age < 81) {
//     var div = document.createElement("div");
//     // <div></div>
//     div.style.color = "red";
//     div.innerText = "You are eligible for DL";
//     pTag.appendChild(div);
//     alert("You are eligible for DL");
//   } else if (age == 18) {
//     var h1 = document.createElement("h1");
//     h1.style.color = "blue";
//     h1.style.fontSize = "40px";
//     h1.innerText = "You are eligible for LL";
//     pTag.appendChild(h1);
//     alert("You are eligible for LL");
//   } else {
//     var h2 = document.createElement("h2");
//     h2.style.color = "pink";
//     h2.style.fontSize = "20px";
//     h2.style.fontFamily = "cursive";
//     h2.innerText = "You are not eligible for DL";
//     pTag.appendChild(h2);
//     alert("You are not eligible for DL");
//   }
//   document.getElementById("age").value = "";
// }

// let count = 0;
// const counterEl = document.getElementById("counter");
// counterEl.innerText = count;

// const increment = function () {
//   count += 1;
//   counterEl.innerText = count;
// };

// const decrement = function () {
//   count -= 1;
//   counterEl.innerText = count;
// };

// const reset = function () {
//   count = 0;
//   counterEl.innerText = count;
// };

// /***********************************************************************/
// /***************************** 18 FEB 2024 *****************************/
// /***********************************************************************/
// console.log(
//   `/***************************** 18 FEB 2024 *****************************/`
// );

// // for loop - print numbers from 1 - 10
// for (var i = 1; i < 11; i++) {
//   console.log(i);
// }

// // while loop - print numbers from 1 - 10
// var i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// var i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// string = "malayalam";
// function findPalindrome(string) {
//   var left = 0;
//   var right = string.length - 1;
//   while (left < right) {
//     if (string[left] !== string[right]) {
//       return "Not a palindrome";
//     } else {
//       left++;
//       right--;
//     }
//   }
//   return "Its a Palindrome";
// }

// console.log(findPalindrome(string));

// string = "abvvc";
// function findPalindrome(string) {
//   for (var i = 0; i < Math.floor(string.length / 2); i++) {
//     if (string[i] !== string[string.length - 1 - i]) {
//       return "Not a palindrome";
//     }
//   }
//   return "Its a palindrome";
// }

// console.log(findPalindrome(string));

// var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i < 11);

// // constructor function
// function myDetails(myname, mysurname, myage) {
//   this.name = myname;
//   this.surname = mysurname;
//   this.age = myage;
//   this.checkDl = function () {
//     if (this.age > 5) {
//       return `${this.age} is more than 5`;
//     }
//   };
//   this.checkDl2 = function () {
//     if (this.age > 5) {
//       return `${this.age} is more than 5`;
//     }
//   };
//   this.checkDl3 = function () {
//     if (this.age > 5) {
//       return `${this.age} is more than 5`;
//     }
//   };
// }

// const me = new myDetails("awdiz", "institute", 10);
// const me2 = new myDetails("bhoami", "xyz", 20);
// console.log(me.name);
// console.log(me2.name);
// console.log(me.checkDl());
// console.log(me2.checkDl());

/***********************************************************************/
/***************************** 25 FEB 2024 *****************************/
/***********************************************************************/
// console.log(
//   `/***************************** 25 FEB 2024 *****************************/`
// );

let string = "Hi, I am Awdiz. I am located at washi.";

const findCount = function (string) {
  let object = {};
  let word = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " || string[i] === "," || string[i] === ".") {
      if (word !== "") {
        if (object[word]) {
          object[word]++;
        } else {
          object[word] = 1;
        }
        word = "";
      }
    } else {
      word += string[i];
    }
  }
  console.log(object); // final answer
};

findCount(string);
