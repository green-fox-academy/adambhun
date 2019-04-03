// Write a function that takes a filename as a parameter.
// Return the most common character of the file's content.
// If the file does not exist throw an exception with the following message:
// "File does not exist!"

'use strict';
export { };

let fs = require('fs');

function mostCommon(params: string) {
  try {
    let fileContent = fs.readFileSync(params, 'utf-8');
    if (fileContent) {
      let fCArray = fileContent.split('');
      fCArray.sort();
      let input = fCArray.join('');
      let matches = /(?=((.+)(?:.*?\2)+))/g.exec(input);
      console.log('Most common character is: ' + '"' + matches[1] + '"');
    } else {
      throw new console.error('File does not exist!');
    }
  }
  catch (error) {
  }

}

mostCommon('countchar.txt');