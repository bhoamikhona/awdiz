///// Object /////

/*
Syntax:

const myObject = {
  key: value,
}
*/

const myData = {
  firstName: `Bhoami`,
  age: 27,
  hobbies: [`Singing`, `Dancing`, `Badminton`],
  driverLicense: true,
  food: {
    italian: `lasagna`,
    mexican: `quesadilla`,
  },
};

console.log(myData.firstName);
console.log(myData.age);
console.log(myData.hobbies);
console.log(myData.hobbies[1]);
console.log(myData.food.mexican);

const myObject = {};
myObject[`Name`] = `Bhoami`;
myObject[`age`] = 27;
myObject[`hasCompletedAssignment`] = true;
myObject[`isActiveOnDays`] = [`Monday`, `Tuesday`];

console.log(myObject);

/*
Q Given an array, return only unique numbers.
*/
const numbers = [0, 1, 2, 3, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5];

let temp = {};

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] in temp) {
    temp[numbers[i]] += 1;
  } else {
    temp[numbers[i]] = 1;
  }
}
console.log(Object.keys(temp));
