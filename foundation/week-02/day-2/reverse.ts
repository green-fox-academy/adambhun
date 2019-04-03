
'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

//split into array, reverse array, recreate string, return w\ its value

function reverse(reversed){
    return reversed.split('').reverse().join('');
}

console.log(reverse(reversed));

export = reverse;