'use strict';
export { };

import { writeFileSync, readFileSync } from "fs";
import { log } from "util";
const fs = require('fs');

function avgRating(file: string) {
  let fileContent: string;
  try {
    fileContent = fs.readFileSync(file, 'utf-8');
    if (!fileContent) {
      throw new Error('File does not exist!');
    }
  } catch (error) {
    console.log(error.message);
  }

  //need an array to iterate through
  function createMultidimensionalNumArr(input: string): number[][] {
    let temp: string[] = input.split('\r\n');
    //remove empty
    temp.splice(temp.length - 1, 1);
    //create multidim
    let mArr: string[][] = [[]];
    temp.forEach(element => {
      mArr.push(element.split(' '));
    });
    mArr.splice(0, 1);
    let numArr: number[] = [];
    for (let index = 0; index < mArr.length; index++) {
      mArr[index].forEach(element => {
        numArr.push(parseInt(element));
      });
    }
    let mnumArr: number[][] = [[]];
    for (let index = 0; index < 4; index++) {
      mnumArr.push([]);
      mnumArr[index].push(numArr[index], numArr[index + 1], numArr[index + 2],
        numArr[index + 3]);
    }
    mnumArr.splice(mnumArr.length - 1, 1);

    return mnumArr;
  }
  let arr: number[][] = createMultidimensionalNumArr(fileContent);

  let map: object = {};
  let keys: string[] = ['matReview', 'presSkills', 'helpfulness', 'explanation'];
  let skillnum: number = 0;
  keys.forEach(skill => {
    if (map[skill] === undefined) {
      //get sum of column
      let accu: number = 0;
      for (let index = 0; index < arr[index].length-1; index++) {
        accu += arr[skillnum][index];
      }
      map[skill] = accu / arr.length;
    }
    skillnum++;
  });
  return map;
}
console.log(avgRating('responses.txt'));

