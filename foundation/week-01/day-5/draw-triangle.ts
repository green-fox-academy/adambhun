'use strict';

let lineCount: number = 4;
let lineCount2: number = lineCount+1;
let astnum: number = 0;
let start: string = '';
let astx: string = '*';

while(astnum !== lineCount2){
    console.log(start);
    start = start.concat(astx);
    astnum++;
    lineCount--;
}

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is