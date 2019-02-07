'use strict';

class Angrm {
  anagram(p1: string, p2: string):boolean {
    let counter: number = 0;
    let p1Arr:string[] = p1.split('');
    let p2Arr:string[] = p2.split('');

    for (let index = 0; index < p2Arr.length; index++) {
      p1Arr.forEach(element => {
        if (element === p2Arr[index]) {
          counter++;
        }
      });
    }

    if (counter === p1Arr.length) {
      return true;
    }
    return false;
  }
}