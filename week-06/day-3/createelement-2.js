'use strict';

const king = document.querySelector('li');
const astrds = document.querySelector('.asteroids');
astrds.removeChild(king);

//impossible to create object from parsed text

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid === true) {
    let newLi = document.createElement('li');
    astrds.appendChild(newLi);
    newLi.innerHTML = planetData[i].content;
    newLi.classList.add(planetData[i].category);
  }
}

console.log(astrds);
