'use strict';

import { writeFileSync } from "fs";

// There is a not so family friendly text in the `content.txt`
// Create a function named familyFriendlizer that takes a filename and a list of strings as parameters
// and remove all the given words from the file and returns the amount of the removed words.

let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss'];

function familyFriendlizer(text, blacklist) {
  let fs = require('fs');
  let fileContent = fs.readFileSync(text, 'utf-8');
  let textArray = fileContent.toLowerCase().split(/\W+/);
  let counter: number = 0;

  for (let index2 = 0; index2 < textArray.length; index2++) {
    for (let index = 0; index < blacklist.length; index++) {
      if (textArray[index2].includes(blacklist[index])) {
      textArray.splice(index2, 1);
      counter++;
      }
    }
  }
  writeFileSync('output.txt', textArray.join(' '));
  return counter;
}

console.log(familyFriendlizer('content.txt', offensiveWords)); // should print out 17



