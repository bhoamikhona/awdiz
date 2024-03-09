## 15th Feb 2024

- difference between map() and forEach()
  - The map() method returns an entirely new array. The forEach() method returns `undefined`
- `push()`
  - The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
- `pop()`
  - The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
- `shift()`
  - The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
- `unshift()`
  - The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
- `slice()`
  - The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
- `splice()`
  - The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

## 16th Feb 2024

- template literals
- `concat()`
- `includes()`
- `sort()`
  - When you sort an array with `.sort()`, it assumes that you are sorting strings. When sorting numbers, the default behavior will not sort them properly.
  - The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:
    - if it returns a negative value, the value in a will be ordered before b.
    - if it returns 0, the ordering of a and b won’t change.
    - if it returns a positive value, the value in b will be ordered before a.
  - When you pass the function `(a, b) => a - b`, you’re telling the `.sort()` function to sort the numbers in ascending order.
- `join()`
- `split()`
- `at()`

## 17th Feb 2024

## 21st Feb 2024
