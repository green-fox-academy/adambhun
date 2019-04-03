// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';
export{ }
let fs = require('fs');
let fileContent;

fileContent = fs.readFileSync('log.txt', 'utf-8');
let arrFC = fileContent.split('\n');


//return regex match, compare them

let uniqueArray: string[] = arrFC;

function unique(arr: string[]) {
  let index: number = 0;
  let uniqueInd: number = 0;
  //increment index
  for (index; index < arr.length; index++) {
    //check arr[index] if = uniqueArra[uniquInd]
    for (uniqueInd; uniqueInd < arr.length; ++uniqueInd) {
      if (uniqueArray[uniqueInd].match(/\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/)[0] === arr[index].match(/\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/)[0]) {
        uniqueArray.splice(uniqueInd,1);
      }
    }
  }
}

unique(arrFC);

console.log(uniqueArray);