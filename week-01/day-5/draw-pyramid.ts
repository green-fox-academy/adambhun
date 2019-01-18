'use strict';

let lineCount: number = 4;
let lineCntr: number = 0;
let lineCntr2: number = lineCount+1;
let spcCntr: number = lineCount+1;
let astCntr: number = 0;

let spaces: string = '';
let asts: string = '';
let final: string;

for(lineCntr; lineCntr !== lineCount; lineCntr++){
    for(spcCntr; spcCntr !== 0; spcCntr--){
        spaces += 'f';
    }
    for(astCntr; astCntr !== lineCount; astCntr++){
        asts += '*';
    }
final = spaces + asts;
console.log(final);
}



// négy számláló, 3 while(léptet, space, ast)

//pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is