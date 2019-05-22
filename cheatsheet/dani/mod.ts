let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6];

const mostCommonItem = (myArray) =>
  myArray.reduce(
    (a, b, i, arr) =>
    (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
    null);