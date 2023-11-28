// Closures

function outerFunction() {
  const myName = "bhoami";
  function innerFunction() {
    return `Hello everyone, I am ${myName}...`;
  }
  return innerFunction;
}

const result = outerFunction();
console.log(result());

// Event Loop

console.log(`Starting`);

setTimeout(() => {
  console.log(`setTimeout`);
}, 0);

console.log(`Ending`);

// Promise, resolve, reject

console.log(`start`);

Promise.resolve().then(() => {
  console.log(`promise`);
});

console.log(`end`);

/////////////////////////////

console.log(`start`);

setTimeout(() => {
  console.log(`st`);
}, 0);

Promise.resolve().then(() => {
  console.log(`promise`);
});

console.log(`end`);
