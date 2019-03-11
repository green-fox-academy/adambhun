'use strict';

//JUDIT KÓDJA ALAPJÁN
//JUDIT KÓDJA ALAPJÁN

let imgPosition = {
  x: 0,
  y: 0
}
let imgSize = 100;
let navBar = document.querySelector('nav');
let img = document.querySelector('.img-inspector');

navBar.addEventListener('click', (e) => {
  let dataAction = e.target.dataset.action;
  let dataDirection = e.target.dataset.direction;
  
  if (dataAction === 'zoom') {
    dataDirection === 'in' ? imgSize *= 1.2 : imgSize /= 1.2;
    img.setAttribute('style', `background-size: ${imgSize}%`);
    
  } else if (dataAction = 'move') {

    if (dataDirection === 'up') {
      imgPosition.y -= 10;
    } else if (dataDirection === 'down') {
      imgPosition.y += 10;
    } else if (dataDirection === 'right') {
      imgPosition.x += 10;
    } else if (dataDirection === 'left') {
      imgPosition.x -= 10;
    }

    img.setAttribute('style', `background-position: ${imgPosition.x}px ${imgPosition.y}px;`);
  }

  (img.getAttribute('style'));
  
  // img.getAttribute('style', `background-position: `);)
});