function addition1() {
  const num1 = 10;
  const num2 = 20;

  console.log(num1 + num2); // 30
}

addition1();

console.log(`----------`);

function addition2(num1, num2) {
  console.log(num1 + num2); // 30
}

addition2(10, 20);

console.log(`----------`);

function addition3(num1, num2) {
  console.log(num1, num2); // 10, undefined
}

addition3(10);

console.log(`----------`);

function addition4(num1, num2) {
  console.log(num1, num2); // 10, 20
}

addition4(10, 20, 30);

console.log(`----------`);

function addition5(num1, num2) {
  console.log(num1, num2); // 70
}

addition5(30, 40);

console.log(`----------`);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 11;

function findTarget(target, array) {
  // console.log(target, array);

  let flag = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log("We got it!");
      flag = true;
    }
  }

  if (flag === false) {
    console.log(`Not found!`);
  }
}

findTarget(target, array);

console.log(`----------`);

// Another way to write function
const myFunction = function (num1, num2) {
  console.log(num1, num2); // 10, 20
};

myFunction(10, 20);

console.log(`----------`);

function addition6(num1, num2) {
  console.log(num1 + num2); // only prints the value
  return num1 + num2; // returns the value
}

const answer = addition6(2, 3);
console.log(answer);

console.log(`----------`);

function test() {
  console.log(`Test 1`);
  return `hi`; // end statement - block stops
  console.log(`Test 2`); // cannot reach this line of code
}

console.log(`----------`);

function findEven(number) {
  if (number % 2 === 0) {
    return `Number is even`;
  } else {
    return `Number is odd`;
  }
}

console.log(findEven(3));

console.log(`----------`);

function find(number) {
  if (number % 2 === 0) {
    return `Number is even`;
  } else if (number === 9) {
    return `Number is 9`;
  } else if (number < 10) {
    return `Number is less than 10`;
  } else if (number > 10) {
    return `Number is greater than 10`;
  }
}

console.log(find(23));
console.log(find(14));
