'use strict';

class Angrm {
  anagram(p1, p2) {
    if (typeof p1 !== 'string' || typeof p2 !== 'string') {
      return false;
    }
    let counter = 0;
    let p1Arr = p1.split('');
    let p2Arr = p2.split('');

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

module.exports = Angrm;