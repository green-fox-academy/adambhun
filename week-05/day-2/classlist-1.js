'use strict';

const ps = document.querySelectorAll("p");
const apple = document.querySelector(".apple");
const cat = document.querySelector(".cat");

if (ps[3].getAttribute('class') === 'dolphin') {
  apple.innerHTML = 'pear';
}

if (ps[0].getAttribute('class') === 'apple') {
  cat.innerHTML = 'dog';
}

apple.classList.add('red');

ps[1].innerHTML = 'square';