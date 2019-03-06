'use strict';

const section = document.querySelector('Section')

for (let index = 2; index < 101; index++) {
  let newDiv = document.createElement('div');
  section.appendChild(newDiv);
  newDiv.innerHTML = index;
}