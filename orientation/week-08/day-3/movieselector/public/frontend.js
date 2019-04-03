'use strict';


let selected = '';
// let insert = document.querySelector('span')
document.querySelector('select["movie"]').onchange=changeEventHandler;
function changeEventHandler(e) {
    this.value === '' ? selected = '' : selected = this.value; 
    // insert.innerHTML = selected;
}