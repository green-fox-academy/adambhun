'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

let first=quote.split('you',1).join('');
let second=quote.replace(first,'');

quote = first.concat('always takes longer than', second)

console.log(quote);