'use strict';
export { };

let list: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

function check(params:string[]) {
  if (list.includes('milk')) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

check(list);