'use strict';

let candies = 0;
let lollipops = 0;
let canPerSec = 0;
let lolpNum = 0;


let addC = (e) => {
  candies++;
  console.log(candies, lollipops, canPerSec, lolpNum);
  
};
document.querySelector('.create-candies').addEventListener('click', addC);

let buy = (e) => {
  lollipops++;
  candies = candies - 100;
  canPerSec++;
};
document.querySelector('.buy-lollipops').addEventListener('click', buy);

let rain = (e) => {
  canPerSec *= 10;
};
document.querySelector('.candy-machine').addEventListener('click', rain);

//DO EVERY SEC

let asdf = () => {
  candies = candies + lollipops;
  document.querySelector('.lollipops').textContent ='';  
  for (let index = 0; index < canPerSec; index++) {    
    document.querySelector('.lollipops').textContent +='🍭';  
  }
  document.querySelector('.candies').innerText = candies;
  document.querySelector('.speed').innerText = canPerSec;
  console.log(candies, lollipops, canPerSec, lolpNum);
}

setInterval(asdf, 1000);
