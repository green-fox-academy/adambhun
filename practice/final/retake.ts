'use strict';

export function hamming (str: string, arr: string[]): string[] {
  let result: string[] = [];
  for (let outer = 0; outer < arr.length; outer++) {
    let counter: number = 0;
    for (let inner = 0; inner < arr.length; inner++) {
      if (arr[outer][inner] !== str[inner]) {
        counter++;
      }
    }
    console.log(counter);
    
    if (counter < 3) {
      result.push(arr[outer]);      
    }
  }
  return result;
}

console.log(hamming("apple", ["apple", "apply", "tuple", "alter"]));