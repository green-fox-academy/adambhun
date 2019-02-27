'use strict';

const car = document.querySelector('.cat');
const animals = document.querySelectorAll('.animals');

animals[0].innerHTML = car.textContent;

const apple = document.querySelector('.apple');
const balloon = document.querySelector('.balloon');
car.innerHTML = balloon.textContent;
balloon.innerHTML = apple.textContent;



// car.innerHTML +=  balloon.textContent;
// balloon.innerHTML += apple.textContent;
// animals[animals.length - 1].innerHTML += apple.textContent;