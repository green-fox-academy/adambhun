'use strict';


let lineCount: number = 4;
let astnum: number = 0;

let spaces: string = '';
for (let index = 0; index < lineCount+1; index++) {
    spaces += ' ';
}
let asts: string = '*';

//first line
console.log(spaces);

while(astnum !== lineCount){
    console.log(spaces+asts);
    asts += '**';
    spaces = spaces.substring(0,lineCount - astnum);
    astnum++;
}


//pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is