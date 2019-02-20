'use strict';

import { log } from "util";

let names: string[] = [];
console.log(names.length);
names.push('William');
if (names.length) {
  console.log('Not empty');
} else {
  console.log('Empty');
}
names.push('John', 'Amanda');
console.log(names.length);
console.log(names[2]);
names.forEach(function(element): void {
  console.log(element);  
});
names.forEach(function(element, index): void {
  console.log(`${index + 1}. element`);  
});
names.splice(1,1);
names.forEach(function(element): void {
  console.log(element);  
});
names = [];