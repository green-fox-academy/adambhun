// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
export { }
let fs = require('fs');


function linenum (param: string) {
    try {
        let fileContent = fs.readFileSync(param, 'utf-8');
        let line: any[] = fileContent.split("\n");
        if (fileContent) {
            console.log(line.length);
        }
        else {
            console.log('0');
        }
    }
    catch (e) {
    }
}

linenum('my-file.txt');