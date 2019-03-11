'use strict';

const insp = document.querySelector('.img-inspector');
const nav = document.querySelector('nav');

const fire = (e) => {
  console.log('aadakj');
  insp.setAttribute('class', 'in');
};

nav.addEventListener('click', fire);

p:nth-child(2)