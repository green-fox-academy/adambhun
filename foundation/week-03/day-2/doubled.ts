'use strict';
export { }
let fs = require('fs');

// Create a method that decrypts duplicated-chars.txt

let fileContent = fs.readFileSync('duplicated-chars.txt', 'utf-8');

let test: string = 'tteesstt';
let start: number = 0;
let asdf: string;

function rmve(param) {
  asdf = param.slice(start+1, start+2) + param.slice(start+2);
  start++;
}


rmve(test);
rmve(asdf);

console.log(asdf);


