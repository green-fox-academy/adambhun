    'use strict';

const canvas = document.querySelector('.main-canvas') as HTML;
const ctx = canvas.getContext('2d');

//MAIN BLDNG
ctx.fillStyle = 'grey');
ctx.fillRect(200, 200, 400, 300);

//ROOF
ctx.moveTo(200, 200);
ctx.lineTo(400, 50);
ctx.lineTo(600, 200);
ctx.lineTo(200, 200);
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

// DOOR
ctx.fillStyle = 'red';
ctx.fillRect(300,300,100,200);

//BUSHES
for (let index = 0; index <= 600; index = index + 100) {
ctx.beginPath();
ctx.arc(i + 50, 450, 50, 0, Math.PI * 2);
ctx.stroke();
}