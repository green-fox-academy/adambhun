'use strict';

function newarr (arr: number[], n: number): number[] {
  let max: number = arr[0];
  let result: number[] = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
    result.push(arr[index]);
  }
  result[n-1] = result[n-1] * max;
  return result;
}


console.log(newarr([0, 1, 5, 4], 3));