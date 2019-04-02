'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.


//coloring by sections not working -> treat as different lines
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(350, 150);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350, 150);
ctx.lineTo(350, 250);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350, 250);
ctx.lineTo(250, 250);
ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(250, 150);
ctx.strokeStyle = 'purple';
ctx.stroke();

