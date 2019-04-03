'use strict';


let lineCount: number = 7;
let astnum: number = 0;

let spaces: string = '';
for (let index = 0; index < lineCount-2; index++) {
    spaces += ' ';
}
let asts: string = '*';

//first line
console.log(spaces);

while(astnum !== Math.round(lineCount/2)){
    console.log(spaces+asts);
    asts += '**';
    spaces = spaces.substring(0, Math.round(lineCount/2) - astnum);
    astnum++;
}

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is