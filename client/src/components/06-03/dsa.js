const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;

const findTarget = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
};
console.log(findTarget(array, target));

// Binary Search Method

const binarySearch = function (array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const midValue = array[midIndex];

    if (midValue === target) {
      return midIndex;
    } else if (midValue < target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }

  return "Not found";
};

console.log(binarySearch(array, target));
