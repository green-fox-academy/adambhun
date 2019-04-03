'use strict';

export function fun(arr: number[], n: number): number[] {
  let result: number[] = [];
  let highest: number = 0;
  arr.forEach(element => {
    result.push(element);
  });
  arr.forEach(function(element) {
    if (highest < element) {
      highest = element;
    }
  });

  for (let index = n -1; index < arr.length; index+=n) {    
    result[index] = result[index] * highest;
  }
  return result;
}

console.log(fun([0, 1, 5, 4], 3));

console.log(fun([0, 3, 5, 4, 3, 6], 2));