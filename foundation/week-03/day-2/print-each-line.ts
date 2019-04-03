// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

'use strict';
export { }

import { fileURLToPath } from "url";
import { fsync } from "fs";

let fs = require('fs');


function readthis(params) {
    try {
        let fileContent = fs.readFileSync(params, 'utf-8');
        if (fileContent) {
            console.log(fileContent);
        } else {
            throw new Error('Unable to read file: my-file.txt');
        }
    }
    catch(error) {
        console.log(error.message);
    }
}

readthis('my-file.txt');