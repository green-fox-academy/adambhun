'use strict';

export function countLetter(inputText: string){
  inputText = inputText.replace(/[^a-zA-Z]/g, '');
  let textArray: string[] = inputText.split('');
  
  let dictionary: object = {}
  textArray.forEach(letter => {
    if(dictionary[letter] === undefined){
      dictionary[letter] = 1;
    }else {
    dictionary[letter]++}
    return dictionary;
  });
  console.log(dictionary);
  return dictionary;
}


countLetter('h96*/3_?:4hhe56   8avyy');