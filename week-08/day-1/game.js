'use strict';

let candies = 0;
let lolz = 0;
let candsps = 0;
let loldispl = 0;


let addC = (e) => {
  candies++;
  console.log(candies, lolz, candsps, loldispl);
  
};
document.querySelector('.create-candies').addEventListener('click', addC);

let buy = (e) => {
  lolz++;
  candies = candies - 10;
  candsps++;
};
document.querySelector('.buy-lollipops').addEventListener('click', buy);

let rain = (e) => {
  candsps *= 10;
};
document.querySelector('.candy-machine').addEventListener('click', rain);

//DO EVERY SEC

let asdf = () => {
  candies = candies + lolz;
  document.querySelector('.lollipops').textContent ='';  
  for (let index = 0; index < candsps; index++) {    
    document.querySelector('.lollipops').textContent +='🍭';  
  }
  document.querySelector('.candies').innerText = candies;
  document.querySelector('.speed').innerText = candsps;
  console.log(candies, lolz, candsps, loldispl);
}

setInterval(asdf, 1000);
