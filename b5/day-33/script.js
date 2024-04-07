// map()

const array = [1, 2, 3, 4];
console.log("array", array);

const result = array.map((number) => number * 2); // returns an array
console.log("result", result);

// forEach()
array.forEach((number) => console.log(number));

// reduce()
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

// filter()
const list = ["abc", "awdiz", "bhoami", "hi everyone", "welcome"];
const filterResult = list.filter((str) => str.length < 6);

console.log("filterResult", filterResult);

// setTimeout()

setTimeout(() => {
  console.log("Hey");
}, 5000);

// setInterval()
let counter = 0;

const message = setInterval(() => {
  counter++;
  console.log("Hello");
}, 1000);

// clearInterval()
// FIXME this does not work, figure out how to stop setInterval()
if (counter === 10) {
  clearInterval(message);
}
